import InputGroup from "react-bootstrap/InputGroup";
import {Form} from 'react-bootstrap';
import FormControl from "react-bootstrap/FormControl";
import React, { useState } from "react";
import "../componentCss/AddTask.css";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo } from "../redux/Actions";

const AddTask = () => {
  
  const [myInput, setMyInput] = useState("");
  const dispatch = useDispatch();
  const sendToDoToStore = (e) => {
    e.preventDefault()
    // if muyInput True
    if (myInput) {
      dispatch(
        AddTodo({ description: myInput, id: Math.random(), isDone: false })
      );
      setMyInput("");
    } 
    else {
      alert("add to do");
    }
  };

  return (
    <div className="form" style={{textAlign: "-webkit-center"}}>
      <Form onSubmit={sendToDoToStore} style={{width: "100%"}}>
        
      <span className="todo">To Do Application</span>
      <InputGroup  className="mb-3">
        <FormControl
          className="input"
          style={{borderTopRightRadius: "none",
            borderBottomRightRadius: "none"
        }}
          placeholder="Add to do"
          type="text"
          value={myInput}
          onChange={(e) => setMyInput(e.target.value)}
        />
        <button className="btn btn1" onClick={sendToDoToStore}>
          Add
        </button>
      </InputGroup>
            </Form>
            <button className='filter filter1'>
          Filter
        </button>
    </div>
  );
};
export default AddTask;
