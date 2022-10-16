import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { logout} from '../../store/authSlice'
import DarkMode from '../../DarkMode';
import '../../DarkMode.css'
const Asidebar = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state=>state.auth);
  const logoutPage = ()=>{
        Dispatch(logout());
        navigate("/");
  }
  return (
    <>
      <div style={{backgroundColor:"blue"}} className=" aside w-60 h-screen fixed z-50  shadow-2xl ">
            <div className="pt-4 pb-2 px-6 ">
                    <div className="flex items-center">
                        <ul className="grow ml-3">
                          <li className="text-2xl font-serif font-bold text-black">
                            <Link to="">B-Music</Link>
                          </li>
                        </ul>
                    </div>
            </div>
            <hr className="my-2"/>
            <ul className=" first-line:relative px-1">
               {
                 isLoggedIn &&
                 <> 
                    {/* <li className='list text-black text-md px-5 font-bold font-lg'><Link to="addMusic">Add Your Music</Link></li> */}
                    <li className='text-black text-md px-5 font-bold font-lg py-3'><Link to="favMusic">Faviroute Music</Link></li>
                    <li className='list my-3 text-black text-md px-5 font-bold font-lg'><Link to="instaMusic">Vew Post</Link></li>
                    <li className=' list  text-black text-md px-5 font-bold font-lg'><Link to="addMusicInsta">Add  Post</Link></li>
                    <hr className="my-2"/>
                 </>
               }
              
                {
                   !isLoggedIn&&
                   <>
                     <li className='list text-black text-md px-5 font-bold font-lg py-3'><Link to="signUp">Login</Link></li>
                   </>
                }
                {
                  isLoggedIn && 
                  <button onClick={logoutPage} className='text-black text-md px-5 font-bold font-lg py-3'>Logout</button>
                }
               
            </ul>

            <div>
                <h3 className='text-teal-800 mx-5 font-bold'>Dark Mode</h3>
                 <DarkMode/>
             </div>

      </div>
    </>
  )
}

export default Asidebar