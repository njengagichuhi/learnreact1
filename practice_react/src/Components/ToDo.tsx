import React from "react";
import Listitem from "./Listitem";
import { useState } from "react";
const ToDo = () => {
  const [ToDo, settodo] = useState("");
  const [todoList, settodoList] = useState([]);
  const hundleChange = (event) => {
    settodo(event.target.value);
    
  };
  const hundleSubmit = (event) => {
    event.preventDefault();
    let tempList=todoList
    tempList.push(ToDo)
    settodoList(tempList)
    console.log(tempList)
  };

  return (
    <div>
      <form onSubmit={hundleSubmit} action="">
        <input
          value={ToDo}
          onChange={hundleChange}
          className="rounded"
          type="text"
        />
        <div>
          <button className="btn bg-primary text-light my-2">add</button>
        </div>
      </form>
  
      {todoList.map((item)=>(
        <Listitem key={item} name={item}></Listitem>
      ))}
      </div>
   
  );
};

export default ToDo;
