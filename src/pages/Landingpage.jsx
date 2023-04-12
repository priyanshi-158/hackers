import React from 'react'
import image from '../assets/react.svg'

const Landingpage = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-[50%]'>
        <p className='font-bold text-3xl'>Organise Your Notes, Video Lectures and PDFs , all in one-place</p>
        <p className='font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora tenetur repellendus veniam ipsum, laudantium optio corrupti rerum omnis explicabo recusandae expedita deserunt placeat itaque voluptatibus aspernatur eveniet tempore sapiente!</p>
      </div>
      <div className='justify-center flex w-[50%]'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Landingpage