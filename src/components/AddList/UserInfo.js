import React from "react";
import vector from ".../images/vector.svg";
import "./UserInfo.css";

const UserInfo = props => {
    let url=""
    return (
        <div>
            <div>
                <a className="vector" href={url}> <img src={vector} alt="vector" /></a>

            </div>
        </div>
    );
}

export default UserInfo;