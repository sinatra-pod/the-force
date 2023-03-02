import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import FilmDetail from "./views/FilmDetail";
import Planets from "./views/Planets";
import {Starships} from "./views/Starships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/filmdetail" element={<FilmDetail />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships/>} />
    </Routes>
  );
}

export default App;
