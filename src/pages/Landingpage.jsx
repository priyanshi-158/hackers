import React, { useContext, useState } from 'react'
import image from '../assets/react.svg'
import { subjectsContext } from '../context/ContextApi'
const Landingpage = () => {
  const { subjects, setSubjects } = useContext(subjectsContext);
  console.log(subjects);
  let sub = Object.keys(subjects);
  console.log(sub)
  return (

    <div className='w-[80%] m-auto flex flex-row py-32'>
      <div className='w-[50%] '>
        <p className='font-bold text-4xl text-left pb-5 px-4'>Organise Your Notes, Video Lectures and PDFs , all in one-place</p>
        <p className='font-medium text-lg text-left px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora tenetur repellendus veniam ipsum, laudantium optio corrupti rerum omnis explicabo recusandae expedita deserunt placeat itaque voluptatibus aspernatur eveniet tempore sapiente!</p>
      </div>
      <div className='cir justify-center flex w-[50%]'>
      </div>
    </div>
  )
}

export default Landingpage