import { Waveform } from './components/organisms';
import { PageTemplate, Pause, Play, PlayerTemplate } from './components';
import { pauseBtn, playBtn } from './icons';
import React, { useEffect, useState } from 'react';

interface VOPlayerProps {
   voiceoverUrl: string;
   setVOPosition: (time: number) => void;
   setIsPlaying: (status: boolean) => void;
}

export const VOPlayer = ({ voiceoverUrl, setIsPlaying, setVOPosition }: VOPlayerProps) => {
   const [audio, setAudio] = useState<HTMLAudioElement>();
   const [waveformLoaded, setWaveformLoaded] = useState(false);
   const [active, setActive] = useState(false);
   const [seek, setSeek] = useState(0);
   const [end, setEnd] = useState(0);

   useEffect(() => {
      const audio = new Audio(voiceoverUrl);

      const setAudioEnd = () => setEnd((end) => end + 1);

      setAudio(audio);
      audio.addEventListener('ended', setAudioEnd);

      return () => {
         audio.pause();
         audio.removeEventListener('ended', setAudioEnd);
      };
   }, [voiceoverUrl]);

   useEffect(() => {
      const interval = setInterval(() => {
         if (audio) {
            setVOPosition(audio.currentTime * 1000);
         }
      }, 50);

      return () => {
         clearInterval(interval);
      };
   }, [setVOPosition, audio]);

   useEffect(() => {
      setIsPlaying(active);
   }, [setIsPlaying, active]);

   useEffect(() => {
      reset();
      // eslint-disable-next-line
   }, [end]);

   useEffect(() => {
      if (audio != null) {
         audio.currentTime = seek;
      }
      // eslint-disable-next-line
   }, [seek]);

   const play = () => {
      audio?.play();
      setActive(true);
   };

   const pause = () => {
      audio?.pause();
      setActive(false);
   };

   const reset = () => {
      pause();
      if (audio) audio.currentTime = 0;
   };

   // const formatTimestamp = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

   return (
      <PageTemplate>
         <PlayerTemplate>
            {waveformLoaded &&
                <div>
                   {active ?
                      <Pause src={pauseBtn} onClick={pause}/> :
                      <Play src={playBtn} onClick={play}/>
                   }
                </div>
            }
            {/*{audio &&*/}
            {/*   <div className='w-100 ms-4'>*/}
            {/*      <Waveform*/}
            {/*         setSeek={setSeek}*/}
            {/*         isPlaying={active}*/}
            {/*         audioUrl={audio.src || ''}*/}
            {/*         setWaveformLoaded={setWaveformLoaded}/>*/}
            {/*   </div>*/}
            {/*}*/}
         </PlayerTemplate>
         {/*<div>*/}
         {/*  <Time*/}
         {/*     time={`${!time ? '0:00' : formatTimestamp(time)}/${*/}
         {/*        !length ? '0:00' : formatTimestamp(length)*/}
         {/*     }`}*/}
         {/*  />*/}
         {/*</div>*/}
      </PageTemplate>
   );
};