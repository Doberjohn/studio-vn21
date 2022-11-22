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
import PlaylistItem from './components/PlaylistItem';
import PlaylistTemplate from './components/PlaylistTemplate';
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

import React, { useEffect, useRef, useState } from 'react';

const colors = `html{
    --playerBackground: #18191f;
    --titleColor: #ffffff;
    --timeColor: #ffffff;
    --progressSlider: #ff5500;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #ff5500;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
  }`;

const AudioPlayer = ({
  trackList,
  showPlaylist = false,
  autoPlayNextTrack = true,
  customColorScheme = colors,
}) => {
  const [query] = useState('');

  let playlist = [];

  const [audio, setAudio] = useState(null);
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
  let [curTrack, setCurTrack] = useState(0);

  const GlobalStyles = createGlobalStyle`${customColorScheme}`;

  const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

  useEffect(() => {
    const audio = new Audio(trackList[curTrack].url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setEnd((end) => end + 1);

    // events on audio object
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('volumechange', setAudioVolume);
    audio.addEventListener('ended', setAudioEnd);

    setAudio(audio);
    setTitle(trackList[curTrack].title);

    return () => {
      audio.pause();
    };
  }, []);

  const tags = [];
  trackList.forEach((track) => {
    track.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i !== rand))];
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped && autoPlayNextTrack ? next() : play();
    }
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
    setActive(true);
    audio.play();
  };

  const pause = () => {
    setActive(false);
    audio.pause();
  };

  const loop = () => {
    setLooped(!looped);
  };

  useEffect(() => {
    if (audio && curTrack) {
      audio.src = trackList[curTrack].url;
      setTitle(trackList[curTrack].title);
      play();
    }
  }, [curTrack]);

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index !== 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index !== playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute('data-key'));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
    play();
  };

  const isInitialFilter = useRef(true);
  useEffect(() => {
    if (isInitialFilter.current) {
      isInitialFilter.current = false;
    } else {
      if (!playlist.includes(curTrack)) {
        setCurTrack((curTrack = playlist[0]));
      }
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
          onChange={(e) => {
            setSlider(e.target.value);
            setDrag(e.target.value);
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
            onChange={(e) => {
              setVolume(e.target.value / 100);
            }}
          />
        </div>
      </PlayerTemplate>

      {showPlaylist && (
        <PlaylistTemplate>
          {trackList
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((el, index) => {
              if (
                filter.length === 0 ||
                filter.some((filter) => el.tags.includes(filter))
              ) {
                if (el.title.toLowerCase().includes(query.toLowerCase())) {
                  playlist.push(index);
                  return (
                    <PlaylistItem
                      className={curTrack === index ? 'active' : ''}
                      key={index}
                      data_key={index}
                      title={el.title}
                      src={el.url}
                      onClick={playlistItemClickHandler}
                    />
                  );
                }
              }
            })}
        </PlaylistTemplate>
      )}
    </PageTemplate>
  );
};

export default AudioPlayer;