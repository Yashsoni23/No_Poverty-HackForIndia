import React from 'react'
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';

function Workers() {
  return (
    <section className='pt-[6rem] h-max w-full'>
    <div className='mx-[2rem]'>
    <div className=' flex justify-between w-full max-sm:flex-col max-sm:items-center max-sm:gap-[1.4rem]'>
     <div className='flex h-[2.6rem] w-[25rem] rounded-[1.4rem] overflow-hidden bg-red-500'>
        <input type="text" className='pl-[1rem] outline-none w-4/5 text-[1.3rem] bg-slate-200' placeholder='search'/>
        <div className='flex justify-center items-center w-1/5 h-full text-[1rem] bg-primaryColor'><FaSearch className='text-white'/></div>
      </div>

      <div className='flex gap-[.5rem]'>
        <div className='px-[1.4rem] max-sm:py-[.4rem] rounded-[1.2rem] h-full w-fit text-[1rem] font-medium bg-slate-200 flex justify-center items-center '>Painters</div>
        <div className='px-[1.4rem] max-sm:py-[.4rem] rounded-[1.2rem] h-full w-fit text-[1rem] font-medium bg-slate-200 flex justify-center items-center '>Mechanics</div>
        <div className='px-[1.4rem] max-sm:py-[.4rem] rounded-[1.2rem] h-full w-fit text-[1rem] font-medium bg-slate-200 flex justify-center items-center '>Plumbers</div>
        <div className='px-[1.4rem] max-sm:py-[.4rem] rounded-[1.2rem] h-full w-fit text-[1rem] font-medium bg-slate-200 flex justify-center items-center '>Electricians</div>
      </div>
      </div>
 <div className=' min-h-[38rem] flex max-sm:flex-col max-sm:justify-start  justify-between'>
<div className='flex mt-[2rem] gap-[1.2rem] h-fit w-[30rem] p-[1.2rem] max-sm:p-[1rem] rounded-[.6rem] bg-Cardcolor'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU' className='h-[3.4rem] w-[3.4rem] rounded-full bg-black'/>
  <div>
    <h2 className='text-[1.2rem] font-semibold'>dhrumit</h2>
    <h2 className='text-[.9rem] font-medium'>carpainter</h2>
  </div>
</div>

<div className='flex mt-[2rem] gap-[1.2rem] h-fit w-[30rem] p-[1.2rem] rounded-[.6rem] bg-Cardcolor'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU' className='h-[3.4rem] w-[3.4rem] rounded-full bg-black'/>
  <div>
    <h2 className='text-[1.2rem] font-semibold'>dhrumit</h2>
    <h2 className='text-[.9rem] font-medium'>carpainter</h2>
  </div>
</div>

<div className='flex mt-[2rem] gap-[1.2rem] h-fit w-[30rem] p-[1.2rem] rounded-[.6rem] bg-Cardcolor'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU' className='h-[3.4rem] w-[3.4rem] rounded-full bg-black'/>
  <div>
    <h2 className='text-[1.2rem] font-semibold'>dhrumit</h2>
    <h2 className='text-[.9rem] font-medium'>carpainter</h2>
  </div>
</div>
</div>

</div>
   <Footer/>
    </section>
  )
}

export default Workers