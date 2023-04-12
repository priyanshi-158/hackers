import React, { useContext, useState } from 'react'
import image from '../assets/react.svg'
import { subjectsContext } from '../context/ContextApi'
import Card from '../components/Card';
const Landingpage = () => {
  const { subjects, setSubjects } = useContext(subjectsContext);
  console.log(subjects);
  let sub=Object.keys(subjects);
  // sub.forEach(element => {
  //   console.log(element);
  // });
  sub.map(e => {
    console.log(e);
  })
  return (
    <div className='m-auto w-[80%]'>
      <div className='m-auto flex flex-row py-32'>
        <div className='w-[50%] '>
          <p className='font-bold text-4xl text-left pb-5 px-4'>Organise Your Notes, Video Lectures and PDFs , all in one-place</p>
          <p className='font-medium text-lg text-left px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora tenetur repellendus veniam ipsum, laudantium optio corrupti rerum omnis explicabo recusandae expedita deserunt placeat itaque voluptatibus aspernatur eveniet tempore sapiente!</p>
        </div>
        <div className='cir justify-center flex w-[50%] overflow-x-hidden'>
        </div>
      </div>
      <h1 className='font-bold text-4xl text-left pb-8'>Explore All Subjects</h1>
      <div className='flex flex-row justify-around'>
        {sub.map((e,id) => (
          <Card name={e} key={id} no={subjects[e].length}/>
        ))}
      </div>
    </div>
  )
}

export default Landingpage