import React from 'react'

const AddMusic = () => {
  return (
    <div class="block p-6 rounded-lg mx-auto my-20 shadow-lg bg-white max-w-sm">
         <form  enctype="multipart/form-data" method="post">
              <div class="form-group mb-6">
                      <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Music Title</label>
                      <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        placeholder="Music Title"/>
                </div>  
                <div class="form-group mb-6">
                      <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Singer Name</label>
                      <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        placeholder="Singer Name"/>
                </div>  
                <div className='my-2'>
                      <label className='mx-2 font-bold'>Geners</label>
                      <select   name="genere" className='border-2 border-red-300'>
                          <option >---Select---</option>
                            <option value="chill">Chill</option>
                            <option value="sad">Sad</option>
                            <option value="classical Music">Classical Music</option>
                            <option value="pop Music">Pop Music</option>
                            <option value="Folk Music">Folk Music</option>
                      </select>
                </div>          
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Music</label>
              <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
        </form>
    </div>
  )
}

export default AddMusic;