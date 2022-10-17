import React, { useEffect, useState } from 'react';
import { getTopCharts } from '../../../services/musicApiCall/apiCall';
import SongCard from './SongCard';
import {useSelector } from 'react-redux';
import { Audio } from  'react-loader-spinner'
import MusicPlayer from './MusicPlayer/MusicPlayer'

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
  const [loading, setLoading] = useState(true);

  useEffect(()=>{ 
     const fetchData = async ()=>{
     const data =  await getTopCharts(`charts/genre-world?genre_code=${genreListId}`);
     setTopCharts(data)
     setLoading(false);
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
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                              <div>
                                    <input type="search" class="px-5 py-1.5 form-control relative flex-auto min-w-0 block w-full text-base font-normal text-yellow-500 bg-black bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-yellow-500 focus:bg-balck  focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                              </div>
                              <div>
                                  <span class=" shadow-orange-50 input-group-text flex items-center px-3 py-1.5  font-bold cursor-pointer my-1 text-2xl text-white text-center whitespace-nowrap rounded" id="basic-addon2">
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                      </svg>
                                  </span> 
                              </div>
                        </div>   
                         
                  </div>      
            </div>
                  {
                     isPlaying &&
                     <>
                        <div style={{backgroundColor:"#000000",marginTop:"350px"}} className=' fixed z-20   w-full '>
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
                      topCharts?.map((song, i) => (
                        <SongCard
                          key={song.key}
                          song={song}
                          isPlaying={isPlaying}
                          activeSong={activeSong}
                          data={topCharts}
                          i={i}
                        />
                      ))   
                }

          </div>
    </>
  )
}

export default MusicList