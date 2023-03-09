import styled from 'styled-components';
import { Waveform } from '../../organisms';
import { pauseBtn, playBtn } from '../../../shared';
import React, { useEffect, useState } from 'react';

interface VOPlayerProps {
   voiceoverUrl: string;
   voiceoverPCM: number[];
   setVOPosition: (time: number) => void;
   setIsPlaying: (status: boolean) => void;
}

export const VOPlayer: React.FC<VOPlayerProps> = (
   { voiceoverUrl, voiceoverPCM, setIsPlaying, setVOPosition }) => {
   const [audio, setAudio] = useState<HTMLAudioElement>();
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
   }, [end]);

   useEffect(() => {
      if (audio != null) {
         audio.currentTime = seek;
      }
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
            <div>
               {active ?
                  <PlayerIcon src={pauseBtn} onClick={pause}/> :
                  <PlayerIcon src={playBtn} onClick={play}/>
               }
            </div>
            {audio &&
               <div className='w-100 ms-4'>
                  <Waveform
                     audio={audio}
                     audioPCM={voiceoverPCM}
                     isPlaying={active}
                     setSeek={setSeek}/>
               </div>
            }
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

const PageTemplate = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const PlayerTemplate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  background-color: #202020;
  overflow: auto;
`;

const PlayerIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
  }
`;