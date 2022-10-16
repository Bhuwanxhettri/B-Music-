import React from 'react'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const Post = (props) => {
  
  return (
    <>    
          <div class=" cursor-pointer  mt-10 drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-3 transition duration-500 ease-in-out ">
            <div class=" rounded-lg shadow-lg bg-white max-w-sm">
                <img class="w-full h-32 rounded-t-lg " src={props.img} alt="image post"/>
                <span className='mx-5 mt-2 font-mono text-gray-600 font-bold' > <ReactTimeAgo date={props.uploadedTime} locale="en-US"/></span>
              <div class="p-6">
                <h3 class="text-orange-600 text-auto font-bold mb-2">{props.musicTitle}</h3>
                <p class="text-gray-700 text-base mb-4">
                   <span className='font-bold'>Genere : </span> {props.Genere}
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Post