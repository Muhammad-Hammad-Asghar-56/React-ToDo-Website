import React from "react";
import { useState } from "react";


const ToDoList = (props) => {
    const [userList, setUserList] = props.userListState;
    const usermode = props.modeUserState;
    const removeItem=(e)=>{
        userList.pop(e);
    }
    return (
        <div className={`mt-4 bg-${usermode.color === 'white' ? "white" : "lightgray"}`}>
            <ul className="list-group container ">
                {userList.map(
                    (element, index) => (
                        <li className="list-group-item text-start" key={index}>
                            <input className="form-check-input me-4 " type="checkbox" value={element} />
                            <label className="form-check-label">{element}</label>
                        </li>
                    )
                )}

            </ul>
        </div>
    );

};

// ToDoList.propTypes={
//     userListState :useState, 
// }
export default ToDoList;