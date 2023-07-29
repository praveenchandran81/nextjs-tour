'use client'

 
import React, { useState, useTransition } from 'react'

const textboxStyle =
  'pl-3 dark:bg-slate-200 m-3 text-black leading-10 rounded-md font-medium'

const AddImage = () => {
  const [profileimageUrl, setProfileImageUrl] = useState('')
   
  const [isPending, startTransition] = useTransition()

  const addImageToDatabase = async () => {
    
  }

  return (
    <form
      
      className="mx-auto m-10  flex flex-col max-w-4xl dark:bg-slate-500"
      action={() => startTransition(addImageToDatabase)}
    >
      <h1 className="mx-auto text-5xl pt-3">Add Tour Images</h1>
      <label htmlFor="name" className="pl-3">
        {' '}
        Profile Image
      </label>
      <input
        type="file"
        placeholder="Tour name"
        className={textboxStyle}
        name="profileimage"
        value={profileimageUrl}
        onChange={(e) => setProfileImageUrl(e.target.value)}
      />
 

      <div className="max-w-sm mx-auto pb-2">
        <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          {isPending ? 'Adding...' : 'Add Image'}
        </button>
      </div>
    </form>
  )
}

export default AddImage
