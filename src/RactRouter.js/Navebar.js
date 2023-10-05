import React from 'react'
import { NavLink, useNavigate,Navigate } from 'react-router-dom'

function Navebar() {
  const navigate = useNavigate()
  return (
    <>
     
    <div className='sticky z-50 top-0 px-[1rem] py-[.8rem] flex justify-between items-center w-full bg-white shadow-md shadow-black'>
    <h2 className="text-[1.5rem] font-bold"><span className='text-primaryColor'>End</span>Poverty</h2>
        <ul className='flex justify-between text-lg text-black font-semibold capitalize'>
        <div className='flex'>
            <li className='px-3'><NavLink to={"/"}>home</NavLink></li>
            <li className='px-3'><NavLink to={"/about"}>about us</NavLink></li>
            <li className='px-3'><NavLink to={"/contect"}>contect</NavLink></li>
            <li className='px-3'><NavLink to={"/work"}>get work</NavLink></li>
            <li className='px-3'><NavLink to={"/btn"}>btn</NavLink></li>
            {/* <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>login</div>
          <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>register</div> */}
         </div>
        </ul>
        <div className='flex gap-[1rem] font-semibold'>
          <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>login</div>
          <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>register</div>
        </div>
    </div>
    </>
  )
}

export default Navebar