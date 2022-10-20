import React, { useEffect } from 'react'
import Post from './Post'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {ColorRing} from  'react-loader-spinner'

const MusicInsta = () => {
  const [PostData,setPostData] = useState([]);
  const [totalPost,setTotalPost] = useState();
  const [currentPage,setCurrentPage] = useState(1);
  const [loding,setLoding] = useState(false);
  const fetchPostData = async()=>{
    setLoding(true);
    const options = {
      headers: {
        'x-auth-token':`${localStorage.getItem('token')}`,
      }
    };
    const res = await fetch(`http://localhost:5000/instaMusic?page=${currentPage}`,options);
    const data = await res.json();
    setLoding(false)
    setPostData(data.blogs);
    setTotalPost(data.blogCount);
  }
  useEffect(()=>{
  
    fetchPostData()
   
  },[currentPage])


  // search post
  const filterData = (val)=>{
    if(val){
      const filterList =  PostData.filter((kyeword)=>{
        if(kyeword.title.toLowerCase().includes(val.toLowerCase()))
              return kyeword
     })
      setPostData(filterList);
    }else{
      fetchPostData();
    }
  }  

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <> 
        <div class="bg-slate-300 z-40 p-2 drop-shadow-2xl font-extrabold border-r-8 sticky top-0 text-black text-center block  text-3xl">
                  <h1 className='inline mx-5'>Music Insta</h1>
                  <div className=" xl:w-96 inline-block">
                      <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                          <input type="search" onChange={(e)=>{filterData(e.target.value)}} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                      </div>
                </div>          
        </div>
       
       <div className='flex justify-center gap-20'>
            <div className='flex gap-5 ml-72 flex-wrap'>
           
               
                {
                  
                  loding ?
                  <>
                    <div className='my-44'>
                        <span className='text-xl text-red-700 font-bold'>Loading.....</span>
                        <ColorRing
                            visible={true}
                            height="180"
                            width="180"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>
                     
                  </>:
                   PostData?.slice(0).reverse().map((item)=>{            
                          return(
                                <>
                                  <Post 
                                    name={item.name}
                                    musicTitle={item.title}
                                    uploadedTime={item.createdAt}
                                    Genere={item.genere}
                                    img={item.image}
                                  />
                                </>
                   )})
                }
            </div>
       </div>

       <div className='flex justify-center my-16'>

            <Stack spacing={2}>
                <Typography>Page: {currentPage}</Typography>
                <Pagination count={totalPost} page={currentPage} onChange={handleChange} />
            </Stack> 
       </div>
 
    </>
  
  )
}

export default MusicInsta