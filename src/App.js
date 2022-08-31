import React from "react";
import AddUser from "./components/AddList/AddUser";
import "./app.css"
import landing_image from "./images/landing_page.png"
import logo from "./images/Logo.png"
import SeeUser from "./components/SeeList/SeeUser";


function App() {
  return (
    <div className="landing_container">
      <img className="logo" src={logo} alt="logo" />
      <img className="landing_image" src={landing_image} alt="Logo" />
      <AddUser />
      <SeeUser />
    </div>
  );
}

export default App;
