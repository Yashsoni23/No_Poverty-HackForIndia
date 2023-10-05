import React,{useState,useEffect} from 'react'

function Screenwidth() {
  const [width,setWidth] = useState(window.innerWidth);

 const currentScreenwidth = () => {
  setWidth(() => 
  window.innerWidth)
 }

  useEffect(() => {
    window.addEventListener("resize",currentScreenwidth)

    // for clear previos data
    return () => {
      window.removeEventListener("resize",currentScreenwidth)
    }
  })
  return (
    
    <div className='h-screen w-full flex justify-center items-center bg-teal-900'>
       <p className='text-[3vw] font-semibold text-white'>width of screen is : {width}</p>
    </div>
  )
}

export default Screenwidth
