import React from 'react'
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../../../store/features/playerSlice';
import { useSelector,useDispatch } from 'react-redux';
// import { AiFillHeart } from "react-icons/ai";

const SongCard = ({song,isPlaying,activeSong,i,data}) => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state=>state.auth);
    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

      const FavoriuteSong = (fevSong)=>{
         console.log(fevSong);
      }
  return (
   <>
      <div className="flex flex-col gap-3 w-[230px]  transition-all  bg-white backdrop-blur-sm animate-slideup rounded-lg ">
            <div className=" cursor-pointer relative w-full h-48 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-20 hover:bg-opacity-5 transition-all tran flex `}>
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
            <div className=" px-4 py-3 flex flex-col">
                {
                   isLoggedIn && 
                   <>
                      <button onClick={()=>{FavoriuteSong(song)}} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-slate-200 shadow-red-100 shadow-lg font-bold rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add to Favoriute</button>
                   </>
                }
                <p className="font-semibold text-lg text-black truncate">
                        {song.title}
                </p>
                <p className="text-sm truncate text-blackc mt-1">
                        {song.subtitle}
                </p>
    
            </div>

           
    </div>
   </>
  )
}

export default SongCard;