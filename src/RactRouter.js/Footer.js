import React from 'react'
import { NavLink, useNavigate,Navigate } from 'react-router-dom'


function Footer() {
  return (
    <div className=" bg-slate-200">
    <div className=" p-[2rem] flex max-sm:flex-col max-sm:justify-center items-center gap-[5rem] ">
     <div className="w-[30rem] max-sm:flex flex-col justify-center items-center text-center">
       <h2 className="mb-[1rem] text-[1.6rem] font-semibold uppercase">poverty</h2>
       <p className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eos optio deserunt illum quia amet quo dignissimos, a est hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sapiente tempora fugiat veniam pariatur eligendi, sit aperiam ex non qui ducimus, soluta ipsam! Voluptate sequi unde quas consequatur ab?</p>
     </div>
   
     <div className="w-[30rem] max-sm:flex flex-col justify-center items-center text-center">
       <h2 className="mb-[1rem] text-[1.6rem] font-semibold capitalize">quick links</h2>
       <ul className="text-[1.2rem]">
       <li className='px-3'><NavLink to={"/"}>home</NavLink></li>
            <li className='px-3'><NavLink to={"/about"}>about us</NavLink></li>
            <li className='px-3'><NavLink to={"/work"}>contect</NavLink></li>
            <li className='px-3'><NavLink to={"/contect"}>get work</NavLink></li>
            <li className='px-3'><NavLink to={"/contect"}>btn</NavLink></li>
         </ul>
     </div>
   
     <div className="w-[30rem] max-sm:flex flex-col justify-center items-center text-center">
       <h2 className="mb-[1rem] text-[1.6rem] font-semibold capitalize">contact info</h2>
       <div>
       <h2 className="text-[1.2rem] font-semibold capitalize" >Call us</h2>
       <h3 className="text-[1.1rem]">+91 9662*******</h3>
       </div>
       
       <div>
       <h2 className="text-[1.2rem] font-semibold capitalize" >email us</h2>
       <h3 className="text-[1.1rem]">xyz123@gamil.com</h3>
       </div>
       <div>
       <h2 className="text-[1.2rem] font-semibold capitalize" >text on whatsApp</h2>
       <h3 className="text-[1.1rem]">+91 9662*******</h3>
       </div>
     </div>
   
   </div>
   <div className=" flex justify-center py-[.8rem] bg-slate-700 text-white">All Rights Reserved by @endPovertyOrg@2023</div>
   </div>
  )
}

export default Footer