import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Vehicles from "./views/Vehicles";
import People from "./views/people";
import Planets from "./views/Planets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehicle" element={<Vehicles />} />
      <Route path="/characters" element={<People />} />
      <Route path="/planets" element={<Planets />} />
    </Routes>
  );
}

export default App;
