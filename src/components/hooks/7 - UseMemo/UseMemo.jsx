import React from 'react'

function UseMemo() {
  return (
    <div className='h-screen w-full bg-cyan-950 flex justify-center items-center'>
      <div className='flex justify-between items-center flex-col'>
         <div className='flex justify-center items-center gap-20 text-white text-7xl'>
            <button className='h-20 w-20 border-2 border-white '>+</button>
            <p className='text-8xl'>0</p>
            <button className='h-20 w-20 '>-</button>
         </div>
         <button className='py-3 px-7 border-2 border-white'>click me pls</button>
      </div>
    </div>
  )
}

export default UseMemo
