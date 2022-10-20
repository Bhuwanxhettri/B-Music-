import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    title:"",
    description:"",
    genere:"",
    image:""
  })
  const handleChange =(event)=>{
    setInputs((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value,
     }))
  }

  const handlePhoto =(event)=>{
     setInputs({...inputs,image:event.target.files[0]});
  }

  const handleSubmit = async(event)=>{
       event.preventDefault();   
       const requestOptions = {
        method: "POST",
        headers:{ "Content-Type": "application/json",
                    'x-auth-token':`${localStorage.getItem('token')}`
                },
        body: JSON.stringify(inputs),
      };
       await fetch("http://localhost:5000/add/blog",requestOptions).then(()=>{navigate("/instaMusic")});
  }
  return (
    <>
        <form enctype='multipart/form-data' onSubmit={handleSubmit} className='bg-gray-200 px-5 py-3  shadow-2xl w-96 mt-24 flex gap-4 flex-col mx-auto  '>
           <h3 className='text-3xl font-bold text-center'> Post</h3>  
           <input required  onChange={handleChange} name="title" value={inputs.title} type="text" className='p-2 border border-black' placeholder='music title'></input>
           <textarea required onChange={handleChange} name="description" value={inputs.description} className='border border-black' placeholder='Description..'></textarea>
           <div>
              <label className='mx-2 font-bold'>Geners</label>
              <select  onChange={handleChange} name="genere">
                   <option >---Select---</option>
                    <option value="chill">Chill</option>
                    <option value="sad">Sad</option>
                    <option value="classical Music">Classical Music</option>
                    <option value="pop Music">Pop Music</option>
                    <option value="Folk Music">Folk Music</option>
              </select>
           </div>
   
           <label class="block  text-md font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Image</label>
           <input name="image" accept='.png, .jpg, .jpeg'  onChange={handlePhoto} class="block w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="file"  />
           <button type='submit'class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Post</button>
      </form>
    </>
  )
}

export default Add