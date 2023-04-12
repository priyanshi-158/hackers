import React from 'react'
import { NavLink} from 'react-router-dom'


const Card = ({name,no}) => {
  return (
    <div className='w-72 lg:w-[300px]  hover:shadow-lg rounded-3xl sm:mb-10 mb-8 xl:mx-2 sm:mx-5 '>
    <div className='bg-[#110A60] flex justify-center p-5 items-center rounded-t-3xl'>
        
        <p className='font-Playfair text-white text-xl capitalize'>{name}</p>
    </div>
    <div className='bg-[#F0F0F0] rounded-b-3xl px-2'>
    <p className='font-Poppins p-2 font-semibold'> No. Of Topics: {no} </p>
    <p className='font-Poppins p-2 capitalize'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus,  At, omnis sunt!</p>
   <NavLink to={`/`} ><p className='content-center  underline text-[#306AFF] hover:text-blue-800 flex justify-center pb-2'>View More</p></NavLink> 
    </div>
</div>
  )
}

export default Card