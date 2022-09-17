import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { useState,useEffect } from 'react'


const Form = () => {
 const [form,setFrom] = useState(false);

 if(form) return (
    <>
      <RegisterForm/>
    </>
 ) 
 else return (
     <>
         <LoginForm/>
         <p class="text-gray-800  text-center">Not a member? 
          <button onClick={()=>{setFrom(true)}} class="text-blue-600 mx-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</button>
         </p>
     </>
)

}

export default Form