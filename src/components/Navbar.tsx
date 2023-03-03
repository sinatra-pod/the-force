import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../images/starwarslogo.png";
import { Link } from 'react-router-dom';
import {getUser} from "../utils/authData";

const Navbar = () => {

  const loggedInUser = getUser()

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

        {
          loggedInUser ? <h2 className={'text-l text-white'}>{loggedInUser}</h2> :
          <div>
            <Link to={'/login'} >
              <FaUserCircle className="text-4xl" />
            </Link>
          </div>
        }

      </div>
    </div>
  );
};

export default Navbar;
