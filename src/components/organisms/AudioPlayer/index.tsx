import ButtonsBox from './components/ButtonsBox';
import { createGlobalStyle } from 'styled-components';
import LoopCurrent from './components/LoopCurrent';
import loopCurrentBtn from './icons/loop_current.png';
import loopNoneBtn from './icons/loop_none.png';
import Next from './components/Next';
import nextBtn from './icons/next.png';
import PageTemplate from './components/PageTemplate';
import Pause from './components/Pause';
import pauseBtn from './icons/pause.png';
import Play from './components/Play';
import playBtn from './icons/play.png';
import PlayerTemplate from './components/PlayerTemplate';
import Previous from './components/Previous';
import previousBtn from './icons/previous.png';
import Progress from './components/Progress';
import Shuffle from './components/Shuffle';
import shuffleAllBtn from './icons/shuffle_all.png';
import shuffleNoneBtn from './icons/shuffle_none.png';
import styles from './styles/Player.module.css';
import Time from './components/Time';
import Title from './components/Title';
import Volume from './components/Volume';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface VOPlayerProps {
  voiceover: {
    url: string;
    title: string;
  },
  setIsPlaying: (status: boolean) => void;
  updateVOPosition: (time: number) => void;
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
  setIsPlaying,
  updateVOPosition,
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

  useEffect(() => {
    setIsPlaying(active);
    updateVOPosition(audio?.currentTime ? audio.currentTime * 1000 : 0);
  }, [active]);

  const play = () => {
    audio?.play();
    setActive(true);
  };

  const pause = () => {
    audio?.pause();
    setActive(false);
  };

  const reset = () => {
    audio?.pause();
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
            <LoopCurrent
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
