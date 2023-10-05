import React from 'react'
import Navebar from './Navebar'

function Contect() {
  return (
    <section className="h-full w-full text-black">
      <h2 className='mt-[1rem] ml-[1.6rem] text-[2.2rem] font-bold'>Contect us</h2>
       <div className='h-full flex mx-[3rem] my-[1rem] gap-[4rem]'>
        <div className='h-full w-[45rem] '>
          <p className='text-[1.2rem] font-medium'>Connect with us to share your thought, express your opinions and ideas to defeat poverty.</p>
          <div className='mt-[2rem] h-[30rem] w-full bg-slate-200'>
          </div>
        </div>


        <div className='h-full w-[45rem] bg-slate-300 px-[3rem] py-[2rem] rounded-[1rem]'>
          <form action="" className='flex flex-col gap-[1rem] h-full w-full text-red-500'>
          <div className='flex flex-col gap-[.4rem] '>
            <h1 className='text-[1.5rem] capitalize font-semibold'>name</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] text-red-500 placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>contact number</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] text-red-500 placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>purpose to connect</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] text-red-500 placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>details</h1>
            <textarea type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] text-red-500 placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <button type='submit' className='py-[.3rem] mx-auto mt-[.5rem] w-[80%] rounded-[.5rem] bg-red-500 text-[1.5rem] text-white'>Submit</button>
          </form>
        </div>
       </div>
    </section>
  )
}

export default Contect