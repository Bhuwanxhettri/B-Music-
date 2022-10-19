import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { useDispatch } from 'react-redux';
import {login} from '../../../store/authSlice'
import EmailValidator from 'email-validator';
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignup,setSignup] = useState(false);
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const[AuthenticationResponse,setAuthenticationResponse]=useState("")
  const validEmail = EmailValidator.validate(inputs.email);
  const handleChange = (event)=>{
        setInputs((prevState)=>({
             ...prevState,
             [event.target.name]:event.target.value,
        }))
  }

  const sendRequest = async (type)=>{
    //  const res = await axios.post("http://localhost:5000/login",inputs).catch(err=>console.log(err));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email:inputs.email,password:inputs.password,name:inputs.name }),
    };
    const res = await fetch(`http://localhost:5000/${type}`, requestOptions);
    const data = await res.json();
    setAuthenticationResponse(data.message);
  }
  const handleSubmit = async(event)=>{
        event.preventDefault();
        if(isSignup){
            sendRequest("signup").then(()=>{dispatch(login())})
            .then(()=>navigate("/instaMusic"));
        }else{
             await sendRequest("login");
        }   
  }
  if(AuthenticationResponse === "Login Successfull"){
    dispatch(login())
    navigate("/instaMusic");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='mt-24 p-2 w-6/12 drop-shadow-xl flex flex-col mx-auto  gap-2  py-14 px-5 bg-slate-300 '>
           
           <h3 className='text-4xl mb-8 font-bold text-center'>{isSignup?"Sign up":"Login"}</h3>
           {
             isSignup &&
            <>
              <input class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name"
                     required onChange={handleChange} name="name"  value={inputs.name} type="text"></input>
              <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"placeholder="Email address"
                     required onChange={handleChange} name="email"  value={inputs.email} type="email"></input>
              { !validEmail?<span className='text-red-600'>Invalid Email</span>:<span className='text-green-500'>Valid Email</span>}
              <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      required onChange={handleChange} name="password" placeholder="Password" value={inputs.password} type="password"></input>
            </>
           }
           {
            !isSignup &&
            <>
               <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                required onChange={handleChange} name="email"   value={inputs.email} type="email"></input>
               { !validEmail?<span className='text-red-600'>Invalid Email</span>:<span className='text-green-500'>Valid Email</span>}
               <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      required onChange={handleChange} name="password" placeholder="Password" value={inputs.password} type="password"></input>
                <spna className="text-red-600">{AuthenticationResponse?AuthenticationResponse:""}</spna>
            </>
           }
          <button type='submit' className='bg-yellow-500 p-2 text-yellow-100 font-bold'>Submit</button>
          <button type='button' onClick={()=>{setSignup(!isSignup)}} className='underline font-bold'>{isSignup?"Login":"Sign up"}</button>
      </form>


      
    </>
  )
}

export default Auth