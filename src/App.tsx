import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import FilmDetail from "./views/FilmDetail";
import Planets from "./views/Planets";

import PlanetDetails from "./components/planets/PlanetDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Character from "./views/Character";
import CharacterDetails from "./components/characters/CharacterDetails";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <header className="container__header">
        {pathname !== "/login" && <Navbar /> && pathname !== "/register" && <Navbar />}
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filmdetail" element={<FilmDetail />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
          <Route path="/character" element={<Character />} />
          <Route path="/character/:id" element={<CharacterDetails />} />

        </Routes>
        <div>
          {pathname !== "/login" && <Footer /> && pathname !== "/register" && <Footer />}
        </div>
      </div>
    </>

  );
}

export default App;
