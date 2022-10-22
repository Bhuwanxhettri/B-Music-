import React from 'react'
import PlayPause from './MusicHome/PlayPause'
const FavirouteSongCard = ({song,isPlaying,activeSong,data,i}) => {
  return (
    <>
       <div className="flex flex-col gap-3 w-[230px]  transition-all  bg-white backdrop-blur-sm animate-slideup rounded-lg ">
            <div className=" cursor-pointer relative w-full h-48 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-20 hover:bg-opacity-5 transition-all tran flex `}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        // handlePause={handlePauseClick}
                        // handlePlay={handlePlayClick}
                    />
                </div>
                <img alt="song_img" src={song.image} className="w-full h-full rounded-lg" />
            </div>  
            <div className=" px-4 py-3 flex flex-col">

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

export default FavirouteSongCard