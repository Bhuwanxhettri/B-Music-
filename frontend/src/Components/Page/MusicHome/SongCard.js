import React from 'react'
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../../store/features/playerSlice';
import { useDispatch } from 'react-redux';

const SongCard = ({song,isPlaying,activeSong,i,data}) => {
    const dispatch = useDispatch();
    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };
  return (
   <>
      <div className="flex flex-col gap-10 w-[230px]  transition-all  bg-blue-500 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className=" relative w-full h-48 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-10 transition-all tran flex `}>
                <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                />
                </div>
                <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
            </div>
            <div className=" p-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={``}>
                        {song.title}
                    </Link>
                </p>
                <p className="text-sm truncate text-gray-300 mt-1">
                    <Link to="">
                        {song.subtitle}
                    </Link>
                </p>
            </div>
    </div>
   </>
  )
}

export default SongCard;