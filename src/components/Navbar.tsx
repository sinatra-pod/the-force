import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../images/starwarslogo.png";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="text-white flex justify-between items-center container mx-auto">
        <div>
          <img src={Logo} alt="Starwars Logo" />
        </div>
        <div className="flex gap-12 font-extralight text-lg">
          <div>Home</div>
          <div>People</div>
          <div>Vehicles</div>
          <div>Planets</div>
        </div>
        <div className="">
          <FaUserCircle className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
