import React from "react";
import {useState} from "react"
const FunctionalCounter = () => {
 const [counter,setCounter]=useState(0)
  const increament=()=>{
    setCounter(counter+1)
  }
  return (
    <div>
      <div>FunctionalCounter: {counter}</div>
      <div><button onClick={increament} className="btn bg-danger">increament</button></div>
    </div>
  );
};

export default FunctionalCounter;
