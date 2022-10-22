import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Controls = ({ isPlaying,currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="  flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {currentSongs?.length && <MdSkipPrevious size={30} color="black" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="black" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="black" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="black" className="cursor-pointer" onClick={handleNextSong} />}

  </div>
);

export default Controls;
