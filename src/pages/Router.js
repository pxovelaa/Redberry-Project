import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import CreateUser from "./CreateUser";
import SeeUserList from "./SeeUserList";
import CreateLaptopInfo from "./CreateLaptopInfo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/see-user-list" element={<SeeUserList />} />
      <Route path="/create-laptop" element={<CreateLaptopInfo />} />
    </Routes>
  );
}
