import React from "react";
import vector from "../resources/images/Vector.svg";
import "./CreateUser.css";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
// vqmnit tanamshromlis infos pages

const CreateUser = (props) => {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="vector" src={vector} alt="vector" />
        </Link>
        <div className="user_info container">
          <h3 className="active_page">თანამშრომლის ინფო</h3>
          <h3>ლეპტოპის მახასიათებლები</h3>
        </div>
        <form>
            <div className="container inputs-container">
                <TextInput 
                    name="სახელი"
                    placeholder='გრიშა'
                    classname='name'
                    comment='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                />
                <TextInput 
                    name="გვარი"
                    placeholder='ბაგრატიონი'
                    classname='name'
                    comment='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                />
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
