import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import landing_image from "../resources/images/landing_page.png";
import logo from "../resources/images/Logo.png";


function Home() {
  return (
    <div className="landing_container">
      <img className="logo" src={logo} alt="logo" />
      <img className="landing_image" src={landing_image} alt="Logo" />
      <Link className="add_link" to="/create-user"> ჩანაწერის დამატება </Link>
      <Link className="add_link" to="/see-user-list"> ჩანაწერების სია </Link>

    </div>
  );
}

export default Home;
