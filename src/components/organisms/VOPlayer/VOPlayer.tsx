import { createGlobalStyle } from 'styled-components';
import styles from './VOPlayer.module.css';
import {
  ButtonsBox, Loop, Next, PageTemplate, Pause, Play, PlayerTemplate, Previous, Progress,
  Shuffle, Time, Title, Volume } from './components';
import { loopCurrentBtn, loopNoneBtn, nextBtn, pauseBtn, playBtn, previousBtn, shuffleAllBtn,
  shuffleNoneBtn } from './icons';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface VOPlayerProps {
  voiceover: {
    url: string;
    title: string;
  },
  customColorScheme?: string;
}

const colors = `html{
    --playerBackground: #18191f;
    --titleColor: #ffffff;
    --timeColor: #ffffff;
    --progressSlider: #ff5500;
    --progressUsed: #ff5500;
    --progressLeft: #151616;
    --volumeSlider: #ff5500;
    --volumeUsed: #ff5500;
    --volumeLeft:  #151616;
  }`;

export const VOPlayer = ({
  voiceover,
  customColorScheme = colors,
}: VOPlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(1);
  const [end, setEnd] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);
  const [filter] = useState([]);

  const GlobalStyles = createGlobalStyle`${customColorScheme}`;

  const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substr(15, 4);

  useEffect(() => {
    const audio = new Audio(voiceover.url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? parseFloat(((curTime * 100) / audio.duration).toFixed(1)) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setEnd((end) => end + 1);

    // events on audio object
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('volumechange', setAudioVolume);
    audio.addEventListener('ended', setAudioEnd);

    setAudio(audio);
    setTitle(voiceover.title);

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    looped ? play() : reset();
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      audio.currentTime = Math.round((drag * audio.duration) / 100);
    }
  }, [drag]);

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

  const loop = () => {
    setLooped(!looped);
  };

  const previous = () => {
    console.warn('previous');
  };

  const next = () => {
    console.warn('next');
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const isInitialFilter = useRef(true);
  useEffect(() => {
    if (isInitialFilter.current) {
      isInitialFilter.current = false;
    }
  }, [filter]);

  return (
    <PageTemplate>
      <GlobalStyles />
      <PlayerTemplate>
        <div className={styles.title_time_wrapper}>
          <Title title={title} />
          <Time
            time={`${!time ? '0:00' : fmtMSS(time)}/${
              !length ? '0:00' : fmtMSS(length)
            }`}
          />
        </div>

        <Progress
          value={slider}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSlider(parseFloat(e.target.value));
            setDrag(parseFloat(e.target.value));
          }}
          onMouseUp={play}
          onTouchEnd={play}
        />
        <div className={styles.buttons_volume_wrapper}>
          <ButtonsBox>
            <Loop
              src={looped ? loopCurrentBtn : loopNoneBtn}
              onClick={loop}
            />
            <Previous src={previousBtn} onClick={previous} />
            {active ? (
              <Pause src={pauseBtn} onClick={pause} />
            ) : (
              <Play src={playBtn} onClick={play} />
            )}
            <Next src={nextBtn} onClick={next} />
            <Shuffle
              src={shuffled ? shuffleAllBtn : shuffleNoneBtn}
              onClick={shuffle}
            />
          </ButtonsBox>
          <Volume
            value={volume}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setVolume(parseInt(e.target.value) / 100);
            }}
          />
        </div>
      </PlayerTemplate>
    </PageTemplate>
  );
};
