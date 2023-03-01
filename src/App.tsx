import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Person from "./views/Person";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path ="/person" element={<Person/>}>
        <Route path="/person/:id" element={<Person/>}/>
      </Route>
    </Routes>
  );
}

export default App;
