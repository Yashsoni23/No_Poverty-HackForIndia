import React,{useReducer} from 'react'
import reducer from './reducer';

function UseReducer() {
    var initialvalue = 0;
    const [state,dispatch] = useReducer(reducer,initialvalue);
  return (
    <div className='flex justify-center items-center h-screen w-full  bg-blue-950 select-none'>
    <div className='flex justify-between items-center w-[500px] gap-16 text-white p-8 text-6xl '>
    <div onClick={() => dispatch({type:"INC"})} className='flex justify-center items-center h-20 w-20 border-[1px] border-white'>+</div>
    <div className='flex justify-center items-center  text-9xl '>{state}</div>
    <div onClick={() => dispatch({type:"DEC"})} className='flex justify-center items-center h-20 w-20 border-[1px] border-white'>-</div>
    </div> 
  </div>
  )
}

export default UseReducer
