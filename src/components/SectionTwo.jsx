import React from 'react'

function SectionTwo() {
  return (
    <div className='border border-red-900 h-[800px] grid grid:cols-3 mx-auto'>
        <div className='border border-[yellow] col-span-1'>
           <img className='h-[400px]' src='https://supremecampus.com/wp-content/uploads/2021/11/9-Days-Free-Blogging-Mastery-min-1024x796.png'/>
        </div>
        <div className='border border-blue-800col-span-2 w-[80%]'>
            <h1>Join 9 Days Blogging Mastery</h1>
            <p>
Step by Step Blueprint to set successful Blog

Complete Video Course for Beginner
</p>
<button className='bg-black p-3 rounded'>enroll now </button>
        </div>
    </div>
  )
}

export default SectionTwo