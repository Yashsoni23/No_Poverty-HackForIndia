import React,{useState,useEffect} from 'react'

function UseState() {
  const [count,setCount] = useState(0)
 
  return (
    <div className='flex justify-center items-center h-screen w-full  bg-blue-950 select-none'>
      <div className='flex justify-between items-center w-[500px] gap-16 text-white p-8 text-6xl '>
      <div onClick={() => {setCount(count+1)}} className='flex justify-center items-center h-20 w-20 border-[1px] border-white'>+</div>
      <div className='flex justify-center items-center  text-9xl '>{count}</div>
      <div onClick={() => { (count === 0) ?setCount(0) :setCount(count-1)}} className='flex justify-center items-center h-20 w-20 border-[1px] border-white'>-</div>
      </div> 
    </div>
  )
}

export default UseState;
