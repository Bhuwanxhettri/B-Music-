import React, { useEffect,useState } from 'react'
import { getFevMusic } from '../../services/musicApiCall/favirouteMusic';
import {useSelector } from 'react-redux';
import SongCard from './MusicHome/SongCard';
import FavirouteSongCard from './FavirouteSongCard';


const FovriouteMusic = () => {
  const [fevMusic,setFevMusic] = useState([]);
  const {isPlaying,activeSong} = useSelector((state)=>state.player);
  useEffect(()=>{
    const fetchData = async()=>{
      const fev = await getFevMusic({userEmail:localStorage.getItem("user")});
      setFevMusic(fev);
    }
    fetchData();
  },[])

  console.log(fevMusic);

  return (

      <>
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
                                i={i}
                            />

                           
                    </div>
                      
                  </>
                )
                
            })
          }
        </div>
    </>
    
  )
}

export default FovriouteMusic