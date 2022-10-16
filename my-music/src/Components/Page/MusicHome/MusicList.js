import React, { useEffect, useState } from 'react';
import { getTopCharts } from '../../../services/musicApiCall/apiCall';
import SongCard from './SongCard';
import {useSelector } from 'react-redux';

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
  const [genreListId,setGenreListId] = useState("POP");
  const {isPlaying,activeSong} = useSelector((state)=>state.player);
  useEffect(()=>{ 
    const fetchData =async ()=>{
     const data =  await getTopCharts(`charts/genre-world?genre_code=${genreListId}`);
     setTopCharts(data);
    }
    fetchData()
  },[genreListId])

  return (
    <>
            <div className=" w-4/6 shadow-orange-50 shadow-md p-4 sticky z-20 bg-black mx-72 mb-5  flex justify-between items-center sm:flex-row flex-col ">
              <h2 className="font-bold text-center text-xl text-white ">Discover {genreListId.toLowerCase()}</h2>
              <select onChange={(e)=>{setGenreListId(e.target.value)}} className="bg-blue-900 text-white font-bold p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                  {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
              </select>
            </div>
            <div className="shadow-orange-50  shadow-xl ml-72 flex flex-wrap sm:justify-start justify-center gap-8">
                {topCharts?.map((song, i) => (
                  <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={topCharts}
                    i={i}
                  />
                ))}
          </div>
    </>
  )
}

export default MusicList