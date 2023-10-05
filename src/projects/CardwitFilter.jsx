import React from "react";

function CardwitFilter() {
  const data = ["apple", "mengo", "oreng"];
  const list = [
    { id: 1, name: "apple" },
    { id: 2, name: "oreng" },
    { id: 3, name: "mengo" },
    { id: 1, name: "banana" },
  ];

  return (
    <>
    {
        // list.map((x) => <div>{x.id + " " + x.name}</div>) 

       list.filter(x => x.id == 1 ).map(x => { 
        return <div>{x.name}</div>
       }) 
        
        }
    </>
  )
    
 
}

export default CardwitFilter;
