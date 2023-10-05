import React,{useState,useEffect} from 'react';

function Sidemenu() {
    const[openmenu,setOpenmenu] = useState(false)
    const[icon,setIcon] = useState()
   
    useEffect(() => {
        setIcon(openmenu ? "bg-black" : "bg-purple-500")
        openmenu ? document.title = "menu open" : document.title = "menu close"
    })
  return (
    <>
    <div onClick={()=>{setOpenmenu(!openmenu)}} className={`absolute top-0 right-0 max-sm:h-10 max-sm:w-10 max-sm:m-2 h-16 w-16 m-5 ${icon}`}></div>
    <div className={`absolute ${openmenu ? "left-0 " : "-left-[30%] max-sm:-left-[80%]"} top-0  h-screen max-sm:w-[80%] w-[30%] py-20 px-6 bg-purple-500 ease-linear transition-all duration-500`}>
      <ul className='list-none text-5xl capitalize font-bold text-white w-full'>
        <li className='px-4 py-2 border-white border-b-[1px]'>home</li>
        <li className='px-4 py-2 border-white border-b-[1px]'>home</li>
        <li className='px-4 py-2 border-white border-b-[1px]'>home</li>
        <li className='px-4 py-2 border-white border-b-[1px]'>home</li>
      </ul>
    </div>
    </>
  )
}

export default Sidemenu
