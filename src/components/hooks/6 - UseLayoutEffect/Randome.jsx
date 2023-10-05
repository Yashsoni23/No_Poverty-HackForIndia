import React, { useState, useLayoutEffect, useEffect } from "react";

function Randome() {
  const [num, setNum] = useState(0);
//   useEffect(() => {
//     if(num === 0){
//         setNum(num + Math.random() * 100);
//     }
//   }, [num]);                 if use useeffect hook so it after screen lode render fist initial state 0 and update.
  useLayoutEffect(() => {
    if(num === 0){
        setNum(num + Math.random() * 100);
    }
    // if use useeffect hook so it befor screen lode it runed
  }, [num]);
  return (
    <div className="flex justify-center items-center h-screen w-full  bg-blue-950 select-none">
      <div className="flex flex-col justify-between items-center w-[500px] gap-16 text-white p-8 text-6xl ">
        <div className="flex justify-center items-center  text-9xl ">{num}</div>
        <div onClick={() => setNum(0)} className="flex flex-col justify-center items-center h-20 w-96 border-[1px] border-white">
          random num
        </div>
      </div>
    </div>
  );
}

export default Randome;
