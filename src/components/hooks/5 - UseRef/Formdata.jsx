// useref hook is muted it mens if value change of useref it not rerender component
// useref is used for diractly access dom element
import React,{useState,useEffect,useRef} from 'react'

function Formdata() {
  const [userInput,setUserInput] = useState("")
//   const [count,setCount] = useState(0)            --using usestae in count so face infinit render problem 
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  },)
  return (
    <div className='h-screen w-full flex flex-col gap-4 justify-center items-center bg-cyan-900'>
      <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      <p className='text-white text-[2vw]'>Component render : {count.current}</p>
    </div>
  )
}

export default Formdata
