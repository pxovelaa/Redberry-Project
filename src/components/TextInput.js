import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
    return (
        <div className="horizontal-flex">
            <label htmlFor="name">{props.name}</label>
            <input className={props.classname} id="name" type="text" placeholder={props.placeholder} onChange={props.changeHandler} />
            <p>{props.comment}</p>
        </div>
    );
};

export default TextInput;