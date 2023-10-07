import React from "react";
import { NavLink, useNavigate,Navigate } from 'react-router-dom'
import Footer from "./Footer";


function Home() {
  return (
    <>
      <section className=" h-screen w-full text-black">
        <div className={" bg-purple-500 h-[35rem] w-full pt-[8rem] pl-[4rem]"}>
        <div className="absolute top-0 left-0 w-full z-10">

       <img src={"/home_img.png"} className="h-[40rem] w-full" />
        </div>
          <div className="relative z-20 w-fit text-white">
            <h3 className="mb-[.3rem] text-[1.2rem] text-white">you too,can endPoverty!</h3>
            <h1 className="mb-[1rem] text-[1.8rem] font-bold leading-[2.rem] w-[50rem] max-sm:w-full">Looking for flexible work opportunities or need reliable workers for quick tasks? You're in the right place! कRM is your one-stop solution for connecting skilled workers and clients for cash jobs.</h1>
            <div className='w-fit flex justify-center items-center py-[.4rem] px-[1rem] rounded-[.3rem] text-[1.2rem] font-semibold capitalize bg-ButtonColor text-white   '>Connect with us</div>
            {/* <img className="-z-1 absolute top-0 left-0 h-full w-full" src="./images/image 1.png" alt="" /> */}
          </div>
        </div>


{/* ------------------ */}
        <div  className=" relative z-20 max-sm:py-[2rem] max-sm:mt-[5rem] flex max-sm:flex-col max-sm:gap-[.5rem] mx-[4rem] gap-[2rem] rounded-[1.6rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]" >
          <div className="flex  flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-primaryColor capitalize ">434M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-primaryColor capitalize">12M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-[2rem] max-sm:px-[2.5rem] max-sm:p-[.5rem]">
            <h1 className="text-[2rem] font-bold text-primaryColor capitalize">4M</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, tenetur?
            </p>
          </div>
        </div>

{/* ------------------ */}

<div className="mt-[3rem] p-[4rem]">
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-[1rem] font-semibold text-primaryColor ">Ongoing Campaigns</h2>
    <h1 className="text-[1.2rem] font-semibold">fight adainst poverty to succeed in life</h1>
  </div>
  {/* ----card------ */}
      <div className="flex max-sm:flex-col justify-center gap-[2rem] my-[2rem] text-TextColor1">
        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-Cardcolor">
          <h2 className="text-[2rem] font-bold text-primaryColor">Skilled Workers Near You</h2>
          <p className="text-[1.2rem]">Discover skilled workers in your area who are ready to tackle your tasks. Whether you need help with home repairs, gardening, or any other job, find the right professionals just around the corner</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>

        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-Cardcolor">
          <h2 className="text-[2rem] font-bold text-primaryColor">Post a Job, Find the Perfect Match
</h2>
          <p className="text-[1.2rem]">Looking for help with a specific task? Post your job listing and connect with qualified workers. Describe the job, set your budget, and let our platform match you with the best candidates.</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>


        <div className="flex flex-col gap-[1rem] h-[20rem] w-fit p-[2rem]  bg-Cardcolor">
          <h2 className="text-[2rem] font-bold text-primaryColor">Verified and Trusted Workers
</h2>
          <p className="text-[1.2rem]">Rest easy knowing that all workers on our platform undergo a rigorous verification process. We prioritize your safety and satisfaction by ensuring that you hire reliable and trustworthy professionals.</p>
          {/* <div className='mt-[2rem] w-fit flex justify-center items-center py-[.2rem] px-[.6rem] rounded-[.3rem] text-[1rem] font-semibold capitalize bg-yellow-400 text-black '>see more</div> */}
        </div>

      </div>
  {/* ----card------ */}
</div>

<Footer/>
      </section>
    </>
  );
}

export default Home;
