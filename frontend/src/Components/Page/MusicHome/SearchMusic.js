import React from 'react'

const SearchMusic = ({setSearchKey,SearchMusicFun}) => {
   
  return (
    <div class="flex justify-center ">
                <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                              <div>
                                    <input onChange={(event)=>{setSearchKey(event.target.value)}} type="search" class="px-5 w-full py-1.5 form-control relative flex-auto min-w-0 block  text-base font-normal text-yellow-500 bg-black bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-yellow-500 focus:bg-balck  focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                              </div>
                              <div>
                                  <span onClick={SearchMusicFun} className=" active:text-cyan-700  input-group-text flex items-center px-3 py-1.5  font-bold cursor-pointer my-1 text-2xl text-white text-center whitespace-nowrap rounded" id="basic-addon2">
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                      </svg>
                                  </span> 
                              </div>
                        </div>   
                </div>  
                      
    </div>
  )
}

export default SearchMusic