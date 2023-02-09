import WaveSurfer from 'wavesurfer.js';
import React, { useEffect, useRef } from 'react';

interface WaveformProps {
   audio: HTMLAudioElement;
   audioPCM: number[];
   isPlaying: boolean;
   setSeek: (newPosition: number) => void
}

export const Waveform: React.FC<WaveformProps> = (
   { audio, audioPCM, isPlaying, setSeek }) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const waveSurferRef = useRef<WaveSurfer>();

   useEffect(() => {
      if (isPlaying) waveSurferRef.current?.play();
      else waveSurferRef.current?.pause();
   }, [isPlaying]);

   useEffect(() => {
      const waveSurfer = WaveSurfer.create({
         backend: 'MediaElement',
         backgroundColor: '#202020',
         barHeight: 2,
         barWidth: 1,
         container: containerRef.current as HTMLDivElement,
         cursorWidth: 0,
         height: 50,
         progressColor: '#fff',
         responsive: true,
         waveColor: '#333333',
      });

      waveSurfer.on('ready', () => {
         waveSurferRef.current = waveSurfer;
      });

      waveSurfer.on('seek', (newPosition: number) => {
         setSeek(newPosition * waveSurfer.getDuration());
      });

      waveSurfer.toggleMute();
      waveSurfer.load(audio, audioPCM);

      return () => {
         waveSurfer.destroy();
      };

   }, [audio]);

   return (
      <div ref={containerRef} />
   );
};