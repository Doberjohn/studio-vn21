import WaveSurfer from 'wavesurfer.js';
import React, { useEffect, useRef } from 'react';

interface WaveformProps {
   audioUrl: string;
   isPlaying: boolean;
   setSeek: (newPosition: number) => void
}

export const Waveform = ({ audioUrl, isPlaying, setSeek }: WaveformProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const waveSurferRef = useRef<WaveSurfer>();

   useEffect(() => {
      waveSurferRef.current?.playPause();
   }, [isPlaying]);

   useEffect(() => {
      const waveSurfer = WaveSurfer.create({
         barWidth: 1,
         height: 100,
         barHeight: 2,
         cursorWidth: 1,
         responsive: true,
         cursorColor: '#fff',
         waveColor: '#333333',
         progressColor: '#fff',
         backgroundColor: '#202020',
         container: containerRef.current as HTMLDivElement,
      });

      waveSurfer.toggleMute();
      waveSurfer.load(audioUrl);

      waveSurfer.on('ready', () => {
         waveSurferRef.current = waveSurfer;
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