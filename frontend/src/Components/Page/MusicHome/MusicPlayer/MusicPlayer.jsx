import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSong, prevSong, playPause } from '../../../../store/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { Audio } from  'react-loader-spinner'

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1)))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong =()=>{
    dispatch(playPause(false));
    if (!shuffle) {
      dispatch(prevSong(((currentIndex - 1))))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  }

  return (
      <div className="ml-56  my-3 sm:px-12  w-40 flex items-center justify-between">
          <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
          <div className="flex-1 flex flex-col items-center justify-center">
            <Controls
              isPlaying={isPlaying}
              isActive={isActive}
              currentSongs={currentSongs}
              handlePlayPause={handlePlayPause}
              handlePrevSong={handlePrevSong}
              handleNextSong={handleNextSong}
            />
            <Seekbar
              value={appTime}
              min="0"
              max={duration}
              onInput={(event) => setSeekTime(event.target.value)}
              setSeekTime={setSeekTime}
              appTime={appTime}
            />
            
            <Player
              activeSong={activeSong}
              volume={volume}
              isPlaying={isPlaying}
              seekTime={seekTime}
              currentIndex={currentIndex}
              onEnded={handleNextSong}
              onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
              onLoadedData={(event) => setDuration(event.target.duration)}
            />
          </div>
          <div className='flex mx-5'>
            <Audio height = "50" width = "50" radius = "9"color = 'red' ariaLabel = 'three-dots-loading'    wrapperStyle wrapperClass />
            <Audio height = "50" width = "20" radius = "9"color = 'yellow' ariaLabel = 'three-dots-loading'    wrapperStyle wrapperClass />
            <Audio height = "50" width = "50" radius = "9"color = 'green' ariaLabel = 'three-dots-loading'    wrapperStyle wrapperClass />
          </div>
      
          <div className='mx-10 my-2'>
              <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
          </div>

      </div>

  
  );
};

export default MusicPlayer;
