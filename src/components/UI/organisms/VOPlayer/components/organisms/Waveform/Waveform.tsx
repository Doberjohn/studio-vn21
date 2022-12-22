import WaveSurfer from 'wavesurfer.js';
import React, { useEffect, useRef } from 'react';

interface WaveformProps {
   audioUrl: string;
   isPlaying: boolean;
   setSeek: (newPosition: number) => void
   setWaveformLoaded: (loaded: boolean) => void
}

export const Waveform = ({ audioUrl, isPlaying, setSeek, setWaveformLoaded }: WaveformProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const waveSurferRef = useRef<WaveSurfer>();

   useEffect(() => {
      if (isPlaying) waveSurferRef.current?.play();
      else waveSurferRef.current?.pause();
   }, [isPlaying]);

   useEffect(() => {
      const waveSurfer = WaveSurfer.create({
         barWidth: 1,
         height: 100,
         barHeight: 2,
         cursorWidth: 0,
         responsive: true,
         waveColor: '#333333',
         progressColor: '#fff',
         backgroundColor: '#202020',
         container: containerRef.current as HTMLDivElement,
      });

      waveSurfer.toggleMute();
      waveSurfer.load(audioUrl);

      waveSurfer.on('ready', () => {
         waveSurferRef.current = waveSurfer;
         setWaveformLoaded(true);
      });

      waveSurfer.on('seek', (newPosition: number) => {
         setSeek(newPosition * waveSurfer.getDuration());
      });

      return () => {
         waveSurfer.destroy();
      };

   }, [audioUrl]);

   return (
      <div ref={containerRef} />
   );
};