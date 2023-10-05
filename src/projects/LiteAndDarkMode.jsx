import React, { useState } from 'react'

function LiteAndDarkMode() {

  const [lite,setLite] = useState(true)
  const [mode,setMode]  = useState(lite)
  return (
    <div className={`relative h-screen w-screen  flex justify-center items-center ${mode.pageBG}`}>
      <div onClick={() => {lite ? setMode({
    pageBG : "bg-slate-300",
    containerBG : "bg-white",
    text : "text-black" 
   }) : setMode({
    pageBG : "bg-black",
    containerBG : "bg-slate-900",
    text : "text-white" 
     }) ; setLite(!lite)}} className='absolute h-10 w-10 right-10 top-10 bg-blue-400'></div>
        
        <div className={`flex flex-col justify-between h-52 w-60 rounded-md ${mode.containerBG} ${mode.text} p-6`}>
        <h2 className=' font-bold '> Hello</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor, officia non repellat nihil voluptas.</p>
        </div>
    </div>
  )
}

export default LiteAndDarkMode