import React from "react";
import { useState } from "react";
const ConditionalComponent = () => {
    const[display,setDisplay ]=useState (true)
   return display ?(<div><h3>This is a ConditionalComponent</h3></div>):(<div><h3>nothing to show here</h3></div>)
   
   
};

export default ConditionalComponent;
