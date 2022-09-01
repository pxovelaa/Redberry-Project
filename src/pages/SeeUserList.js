import React from "react";
import vector from "../resources/images/Vector.svg";
import "./SeeUserList.css";
import { Link } from "react-router-dom";
// vqmnit tanamshromlis infos pages

const SeeUserList = (props) => {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="vector" src={vector} alt="vector" />
        </Link>
      </div>
    </div>
  );
};

export default SeeUserList;
