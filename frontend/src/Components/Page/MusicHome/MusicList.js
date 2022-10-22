import React, { useEffect, useState } from 'react';
import { getTopCharts } from '../../../services/musicApiCall/apiCall';
import SongCard from './SongCard';
import {useSelector } from 'react-redux';
import { Audio } from  'react-loader-spinner'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import SearchMusic from './SearchMusic';
import { searchMusic } from '../../../services/musicApiCall/apiCall';
import { getFevMusic } from '../../../services/musicApiCall/favirouteMusic';


const genres = [
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];
const MusicList = () => {
  const [topCharts,setTopCharts] = useState();
  const [genreListId,setGenreListId] = useState("ELECTRONIC");
  const {isPlaying,activeSong} = useSelector((state)=>state.player);
  const [loading, setLoading] = useState(true);
  const [searchKey,setSearchKey] = useState("");
  const [fevMusic,setFevMusic] = useState([]);
  useEffect(()=>{ 
     setLoading(true);
     const fetchData = async ()=>{
     const data =  await getTopCharts(`charts/genre-world?genre_code=${genreListId}`);
     const fev = await getFevMusic({userEmail:localStorage.getItem("user")});
     setFevMusic(fev);
     setTopCharts(data)
     setLoading(false);
    }
    fetchData()

  },[genreListId])

  const SearchMusicFun = async ()=>{
    setLoading(true);
    setSearchKey(" ");
    if(searchKey !== ""){
        const data = await searchMusic(`search/multi?query=${searchKey}&search_type=SONGS_ARTISTS`);
        const searchMusicArr = [];
        for(let i=0;i<data.tracks.hits.length;i++){
             searchMusicArr.push(data.tracks.hits[i].track);
        }
        setTopCharts(searchMusicArr)
        setLoading(false);
    }
  }
  return (
    <>
            <div className="mb-10  mx-72  w-9/12 flex justify-between items-center sm:flex-row  ">
              <div className='w-8/12'>
                  <SearchMusic setSearchKey={setSearchKey}  SearchMusicFun={SearchMusicFun} />        
              </div>
              <div>
                  <select onChange={(e)=>{setGenreListId(e.target.value)}} className="bg-blue-900 text-white font-bold p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                      {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                  </select>
              </div>
             
            </div>
                  {
                     isPlaying &&
                     <>
                        <div style={{backgroundColor:"white",marginTop:"430px"}} className=' shadow-orange-100 fixed z-20   w-full '>
                            <MusicPlayer/>
                        </div>
                     </>      
                  }
         
            <div className="shadow-orange-50  shadow-xl ml-72 flex flex-wrap sm:justify-start justify-center gap-8">
               {
                    loading ?
                    <>
                    <div className='my-14 mx-auto'>
                        <Audio height = "380" width = "380" radius = "9"color = 'red' ariaLabel = 'three-dots-loading'    wrapperStyle wrapperClass />
                        <span className='text-xl text-center font-bold my-3'> Loading...</span> 
                    </div>
                    </>
                   :
                   topCharts?.map((song, i) => {
                    for(let i=0;i<fevMusic.length;i++){
                          if(song.key === fevMusic[i].key){
                            return
                          } 
                      }
                      return (
                        <>
                            <SongCard
                            key={song.key}
                            song={song}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            data={topCharts}
                            i={i}
                          />
                        </>
                      )  
              }) 
               }
          </div>
    </>
  )
}

export default MusicList

