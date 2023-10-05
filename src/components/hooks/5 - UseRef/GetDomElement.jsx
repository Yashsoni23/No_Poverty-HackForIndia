import React,{useRef} from 'react'

function GetDomElement() {

    const input = useRef()

    const change = () => {
       input.current.focus();
       input.current.value = "Hii"
    }

  return (
    <div className='h-screen w-full flex flex-col gap-4 justify-center items-center bg-cyan-900'>
      <input ref={input} type="text" className='bg-slate-900 p-4 text-center text-white text-[2rem]' />
      <button onClick={change}  className='text-white bg-slate-900 text-[1.5vw] px-8 py-2 rounded-md'>Click Me</button>
    </div>
  )
}

export default GetDomElement
