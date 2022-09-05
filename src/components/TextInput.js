import React, { useState } from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, comment, onChange, ...inputProps } = props;
  
  const handleFocus = (e) => {
    setFocused(true);
  }
  
  return (
    <div className="horizontal-flex">
      <label htmlFor="name">{label}</label>
      <input 
        {...inputProps} 
        onChange={onChange} 
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="red-comment" >{comment}</span>
    </div>
  );
};

export default TextInput;
