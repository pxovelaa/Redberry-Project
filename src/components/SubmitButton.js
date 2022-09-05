import React from "react";
import "./SubmitButton.css";

const SubmitButton = props => {
    return (
        <div className={props.classname}>
            <button type="submit">{props.BtnName}</button>
        </div>
    );
};

export default SubmitButton;
