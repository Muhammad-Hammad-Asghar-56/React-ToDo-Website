import React, { useState } from 'react';

const AddToDo = (props) => {
  const usermode = props.modeUserState;
  const [userList,setUserList]=props.userListState;

  const addListHandler=()=>{

    let data = document.getElementById("newTodo").value;
    
    if (data !== '') {
      setUserList((prevList) => [...prevList, data]);
      props.showAlert(data + " "+"Added in the List","success");
      setInputValue("");
    }
  }
  const setInputValue=(value)=>{
    document.getElementById("newTodo").value= value;
  }

  return (
    usermode&& <div className={`d-flex p-4 footer bg-${usermode.color === "white" ? "light":"dark"}`}  >
      <input className='me-4' id='newTodo' placeholder='Enter Text Here !'></input>
      <button className='btn btn-primary' onClick={addListHandler} type='button'>Button</button>
    </div>  
  );
};

export default AddToDo;

