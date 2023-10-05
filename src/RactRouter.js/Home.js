import React from "react";
import { NavLink, useNavigate,Navigate } from 'react-router-dom'
import Footer from "./Footer";


function Home() {
  return (
    <>
      <section className=" h-screen w-full text-black">
        <div className="bg-purple-700 h-[35rem] w-full pt-[8rem] pl-[4rem]">
          <div className="w-fit text-white">
            <h3 className="mb-[.3rem] text-[1.2rem] text-white">you too,can endPoverty!</h3>
            <h1 className="mb-[1rem] text-[2.2rem] font-bold leading-[2.rem]">supporting entrepreneurs with <br /> economic and spiritual resources to <br /> enable sustainable prosperity</h1>
            <div className='w-fit flex justify-center items-center py-[.4rem] px-[1rem] rounded-[.3rem] text-[1.2rem] font-semibold capitalize bg-yellow-400 text-black '>Connect with us</div>

          </div>
        </div>


{/* ------------------ */}
        <div className="-mt-[5rem] max-sm:py-[2rem] max-sm:mt-[5rem] flex max-sm:flex-col max-sm:gap-[.5rem] mx-[4rem] gap-[2rem] rounded-[1.6rem] bg-[#ffffff82] shadow-black" style={{boxShadow:"0 1rem 1rem #00000068"}}>
          <div className="flex  flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-green-700 capitalize ">434M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-green-700 capitalize">12M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-green-700 capitalize">4M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>
        </div>

{/* ------------------ */}

<div className="mt-[3rem] p-[4rem]">
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-[1rem] font-semibold text-green-600 ">Ongoing Campaigns</h2>
    <h1 className="text-[1.2rem] font-semibold">fight adainst poverty to succeed in life</h1>
  </div>
  {/* ----card------ */}
      <div className="flex max-sm:flex-col justify-center gap-[2rem] my-[2rem] text-white">
        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-slate-500">
          <h2 className="text-[2rem] font-bold ">session</h2>
          <p className="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>

        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-slate-500">
          <h2 className="text-[2rem] font-bold ">session</h2>
          <p className="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>


        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-slate-500">
          <h2 className="text-[2rem] font-bold ">session</h2>
          <p className="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>

      </div>
  {/* ----card------ */}
</div>


{/* ------ footer -------- */}
<Footer/>
      </section>
    </>
  );
}

export default Home;
