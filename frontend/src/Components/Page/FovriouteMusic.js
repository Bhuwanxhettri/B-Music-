import React, { useEffect,useState } from 'react'
import { getFevMusic, removeFevMusic } from '../../services/musicApiCall/favirouteMusic';
import {useSelector } from 'react-redux';
import FavirouteSongCard from './FavirouteSongCard';
import MusicPlayer from './MusicHome/MusicPlayer/MusicPlayer'

const FovriouteMusic = () => {
  const [fevMusic,setFevMusic] = useState([]);
  const {isPlaying,activeSong} = useSelector((state)=>state.player);
  const [flashMessage,setFlashMessage] = useState("");
  useEffect(()=>{
    const fetchData = async()=>{
      const fev = await getFevMusic({userEmail:localStorage.getItem("user")});
      setFevMusic(fev);
    }
    fetchData();
  },[flashMessage])

  const unFavoriuteSong = async(data)=>{
    const res =  await removeFevMusic(data);
    setFlashMessage(res)
   }

  return (

      <>
        <h1 className=' text-center font-bold leading-tight text-4xl mt-0 mb-2 text-blue-600'>Favoriute Song List</h1>
        <strong className='text-center'>{flashMessage}</strong>
        <div className='shadow-orange-50 my-10 gap-6 shadow-xl ml-72 flex flex-wrap sm:justify-start justify-center gap-'>
          {
            fevMusic?.map((song,i)=>{
                return(
                  <>
                    <div>
                          <FavirouteSongCard
                                key={song.key}
                                song={song}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                data={fevMusic}
                                unFavoriute={unFavoriuteSong}
                                i={i}
                            />   
                    </div>
                  </>
                )
                
            })
          }
            {
              isPlaying &&
                  <>
                    <div style={{backgroundColor:"white",marginTop:"460px"}} className=' shadow-orange-100 fixed z-20   w-full'>
                        <MusicPlayer/>
                    </div>
                </>      
             }
        </div>
    </>
    
  )
}

export default FovriouteMusic