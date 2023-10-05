//UseLayoutEffect , run synchronosly after a render but before 
//the screen is updated

// UseLayoutEffect runs asynchronosly after a render is painted to the screen
import React,{useEffect,useLayoutEffect} from 'react'

function UseLayout() {
    useEffect(() => {
        console.log("fist")
    })
    useLayoutEffect(() => {
        console.log("second")
    })
    useEffect(() => {
        console.log("therd")
    })
  return (
    <div>
      
    </div>
  )
}

export default UseLayout
