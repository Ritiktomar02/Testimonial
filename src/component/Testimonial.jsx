import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const Testimonial = ({state}) => {
    
 
  return (
    <div className='w-full h-4/6   flex flex-col  items-center relative'>
      
      <div className='mt-[58px] text-2xl font-bold'>{state.name}</div>
      <div className=' text-blue-400'>{state.job}</div>
      <div className='my-[20px]'>
      <RiDoubleQuotesL color="violet" size="30px"  />
      </div>
      <div className='text-sm mx-[40px] text-gray-500'>
        {state.text}
      </div>
      <div className='mt-[20px]'><RiDoubleQuotesR color="violet" size="30px"/></div>
      <img src={state.image} className='w-[100px] rounded-full  shadow-xl  absolute top-[-50px] left-5'></img>
    </div>
  )
}

export default Testimonial