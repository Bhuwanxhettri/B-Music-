import React from 'react'
import {Link } from 'react-router-dom';
const Asidebar = () => {
  return (
    <>
      <div className="w-60 h-screen fixed  bg-white shadow-2xl text-white ">
            <div className="pt-4 pb-2 px-6">
                    <div className="flex items-center">
                        <ul className="grow ml-3">
                          <li className="text-2xl font-serif font-bold text-black">
                            <Link to="">B-Music</Link>
                          </li>
                        </ul>
                    </div>
            </div>
            <div class="flex pt-5 justify-center px-5">
                <div className="mb-3 ">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                   
                    </div>
                </div>
            </div>
            <hr className="my-2"/>
            <ul className="relative px-1">
                <li className='text-black text-md px-5 font-bold font-lg'><Link to="instaMusic">Music Insta</Link></li>
                <li className='text-black text-md px-5 font-bold font-lg py-3'><Link to="favMusic">Faviroute Music</Link></li>
                <hr className="my-2"/>
                <li className='text-black text-md px-5 font-bold font-lg py-3'><Link to="signUp">Login</Link></li>
            </ul>

      </div>
    </>
  )
}

export default Asidebar