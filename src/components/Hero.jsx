import React from 'react';
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className='bg-[#FF512F] w-full py-[100px]'>
      <div className='max-w-[1240px] ax-auto text-center font-bold mx-auto mt-3'>
        <div className=' text-xl md:text-4xl font-bold mb-4 '>
        I Can Help you To Start Highly Profitable
        </div>
        <h2 className='text-white font-bold  text-3xl md:text-[50px] mb-4  '>Blogging,Affiliate Marketing and YouTube Career</h2>
         <div  className='text-[20px] text-white font-bold '> Like A Pro <Typewriter className= "mb-3"
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("....in Just 30 days")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("....Join Now")
       .start();
       }}
       />
        
         </div>
         <button className='bg-black p-3 rounded'>enroll now </button>
        </div>  

    </div>
  )
}

export default Hero