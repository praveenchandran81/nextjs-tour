'use client'

import {
  addTourHandler,
  makeAlbumInGitHubRepo,
} from '@/app/actions/tourActions'
import React, { useState, useTransition } from 'react'

const textboxStyle =
  'pl-3 dark:bg-slate-200 m-3 text-black leading-10 rounded-md font-medium'

const AddTour = () => {
  const [name, setTourName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date().toDateString())
  const [profileimage, setProfileImage] = useState('')
  const [albumname, setAlbumname] = useState('')

  const [isPending, startTransition] = useTransition()

  const addTourToDatabase = async () => {
  addTourHandler({
      name,
      description,
      date,
      profileimage,
      albumname,
    }) 
     
    // .then(async (newTour:{'MyTour':TourMaster})=>{
    //   console.log('newTour',newTour);
     
       
    //   // makeAlbumInGitHubRepo(newTour.MyTour.id.toString())
    //    if(newTour && newTour.MyTour && newTour.MyTour.id)
    //    // Create a folder for tour images in the git hub repo
    //    await  makeAlbumInGitHubRepo(newTour.MyTour.id.toString())
    // })
     
    


    // console.log('hello2',newTour);

    //   if (newTour != undefined) {
    //     setTourName('')
    //     setDescription('')
    //     setDate('')
    //     setProfileImage('')
    //     setAlbumname('')
    //     // Create a folder for tour images in the git hub repo
    //     makeAlbumInGitHubRepo(newTour.id?.toString() as string)
    //   }
     
  }

  return (
    <form
      id="addNewTourForm"
      className="mx-auto m-10  flex flex-col max-w-4xl dark:bg-slate-500"
      action={() => startTransition(addTourToDatabase)}
    >
      <h1 className="mx-auto text-5xl pt-3">Add New Tour</h1>
      <label htmlFor="name" className="pl-3">
        {' '}
        Name
      </label>
      <input
        type="text"
        placeholder="Tour name"
        className={textboxStyle}
        name="name"
        value={name}
        onChange={(e) => setTourName(e.target.value)}
      />

      <label htmlFor="name" className="pl-3">
        {' '}
        Description
      </label>
      <input
        type="text"
        placeholder="Tour description"
        name="description"
        className={textboxStyle}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="name" className="pl-3">
        {' '}
        Date
      </label>
      <input
        type="date"
        placeholder="Tour date"
        name="date"
        value={date}
        className={textboxStyle}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="name" className="pl-3">
        {' '}
        Profile Image
      </label>
      <input
        type="text"
        placeholder="Tour profile image"
        name="profileimage"
        className={textboxStyle}
        value={profileimage}
        onChange={(e) => setProfileImage(e.target.value)}
      />

      <label htmlFor="name" className="pl-3">
        Album Name
      </label>
      <input
        type="text"
        placeholder="Tour album name"
        name="albumname"
        className={textboxStyle}
        value={albumname}
        onChange={(e) => setAlbumname(e.target.value)}
      />

      <div className="max-w-sm mx-auto pb-2">
        <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          {isPending ? 'Adding...' : 'Add Tour'}
        </button>
      </div>
    </form>
  )
}

export default AddTour
