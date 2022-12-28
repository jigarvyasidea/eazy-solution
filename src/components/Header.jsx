import React, { useState } from 'react'
import {AiOutlineMenu , AiOutlineCloseCircle} from "react-icons/ai";

function Header() {

  //definse start
  const[toggle , setToggle] = useState(false);
  return (
    <div className='bg-[#FF512F] p-4'>
     <div className='max-w-[1240px] py-[10px] flex justify-between   mx-auto  item-center'>
      <div className='text-3xl font-bold'>easy solution </div>
      {
        toggle ? 
        
        <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl  md:hidden block'/>
        :
        <AiOutlineCloseCircle onClick={()=> setToggle(!toggle)} className="text-white text-2xl md:hidden block " />
      }
     
     
      <ul className=' hidden md:flex text-white gap-10 '>
        <li>
          Home 
        </li>
        <li>
          message
        </li>
        <li>
          Telecome 
        </li>
        <li>
          service
        </li>
      </ul>
      {/* responsive menu  */}

      <ul className='md:hidden h-screen w-full text-white fixed bg-black left-0 top-[87px]  left-[-1000px]'>
        <li className='p-5  '>
          Home 
        </li >
        <li className='p-5 '>
          message
        </li>
        <li className='p-5  '>
          Telecome 
        </li>
        <li  className='p-5 '>
          service
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Header