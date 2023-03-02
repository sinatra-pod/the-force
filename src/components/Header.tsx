import React from 'react'
import logo from '../images/starwarslogo.png';
import { Link } from 'react-router-dom';

import { FaUser, FaSearch } from 'react-icons/fa';


function Header() {
  return (
    <>
      <nav className="grid justify-center p-6">
        <div className='flex-row flex items-stretch'>
          <span className=''>
            <form className="flex justify-end p-6 mt-8 rounded-full bg-black">
              <button type="submit" className="btn-search ml-0 py-2 text-white rounded-full">
                <FaSearch />
              </button>
              <input type="text" name='search'
                className="bg-black text-white outline-none focus:shadow-outline px-4 py-2 w-full"
                placeholder="Search..." />
            </form>
          </span>
          <div className=''>
            <img src={logo} alt="Logo" className='' />
          </div>
          <div className='flex space-x-2 mt-10 lg:ml-auto sm:ml-96 text-white '>
            <div><FaUser /></div>
            <div><Link to="/login"> Sign In</Link></div>

          </div>
        </div>
        <div className="w-full block lg:flex lg:w-auto">
          <div className="lg:space-x-52 text-sm font-medium leading-8 tracking-0 text-white hover:text-teal-200 ">
            <a href="/planets" className="block mt-4 lg:inline-block lg:mt-0 ">
              FILMS
            </a>
            <a href="/databanks" className="block mt-4 lg:inline-block lg:mt-0">
              CHARACTERS
            </a>
            <a href="/planets" className="block mt-4 lg:inline-block lg:mt-0">
              SERIES
            </a>
            <a href="/databanks" className="block mt-4 lg:inline-block lg:mt-0">
              DATABANK
            </a>
          </div>

        </div>

      </nav></>
  )
}

export default Header