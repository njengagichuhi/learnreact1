import React from "react";

export const FunctionEvent = () => {
    const hundleClick=()=>{
        console.log ('bootstrap')
    }
  return (
    <div>
      Functonal component
      <div>
        <button onClick={hundleClick} className="btn btn-primary"> mghjhgm</button>
      </div>
    </div>
  );
};
export default FunctionEvent;
