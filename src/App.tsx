import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import FilmDetail from "./views/FilmDetail";
import Planets from "./views/Planets";

import PlanetDetails from "./components/planets/PlanetDetails";
import Header from "./components/Header";
import Databank from "./views/Databank";
import DatabankDetails from "./components/databanks/DatabankDetails";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <header className="container__header">
        {pathname !== "/login" && <Header /> && pathname !== "/register" && <Header />}
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filmdetail" element={<FilmDetail />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
          <Route path="/databanks" element={<Databank />} />
          <Route path="/databank/:id" element={<DatabankDetails />} />

        </Routes>
      </div>
    </>

  );
}

export default App;
