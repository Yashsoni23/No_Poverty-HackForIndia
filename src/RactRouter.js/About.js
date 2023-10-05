import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'

function About() {
  return (
    <section className="w-full text-black">
    <div>
    <div className='m-[3rem] h-fit'>
      <div className='top-0  h-[33rem] max-sm:h-[20rem] w-[88rem] max-sm:w-[30rem] flex items-center  bg-blue-950 text-white'>
      <div className='ml-[4rem] w-[20rem]'>
        <h2 className='text-[2rem] font-bold capitalize'>about us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur corporis mollitia. Sit, fuga ex!</p>
        </div>
      </div>
      <div className='absolute top-[12rem] max-sm:top-[30rem] right-[3rem] z-10  h-[33rem] w-[55rem] max-sm:h-[20rem] max-sm:w-[30rem] bg-red-500'></div>
     </div>
    </div>

{/* ------------ */}
<div className='m-[3rem] mt-[12rem]'>
<p className='mx-[20rem] my-[4rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis molestiae incidunt earum delectus, minus debitis atque? Quibusdam rerum eligendi ducimus.</p>
  <div className='px-[2rem] w-full flex flex-col items-center gap-[4rem]'>
    <div className='w-full flex justify-between items-center gap-[4rem]'>
         <div className='h-[30rem] w-[40rem] bg-slate-400'></div>
         <div className=' w-[40rem]'>
          <h2 className='text-[2rem]'>Mission & Vision</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente minus doloribus dignissimos, eos debitis nesciunt placeat, excepturi laborum doloremque odio repudiandae autem ratione? Dolore deleniti reprehenderit mollitia nam odio!</p>
         </div>
    </div>

    <div className='w-full flex justify-between items-center gap-[4rem]'>
         <div className=' w-[40rem]'>
          <h2 className='text-[2rem]'>Mission & Vision</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente minus doloribus dignissimos, eos debitis nesciunt placeat, excepturi laborum doloremque odio repudiandae autem ratione? Dolore deleniti reprehenderit mollitia nam odio!</p>
         </div>
         <div className='h-[30rem] w-[40rem] bg-slate-400'></div>
    </div>
</div>
</div>


<Footer/>


    </section>
  )
}

export default About