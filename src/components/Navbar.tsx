import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../images/starwarslogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="text-white flex justify-between items-center container mx-auto">
        <div>
          <img src={Logo} alt="Starwars Logo" />
        </div>
        <div className="flex gap-12 font-extralight text-lg">
          <div><Link to="/">Films</Link></div>
          <div><Link to="/character">Characters</Link></div>
          <div><Link to="/planets">Planets</Link></div>
          <div><Link to="/starships">Starships</Link></div>
        </div>
        <div className="">
          <FaUserCircle className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;