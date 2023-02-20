import React from 'react'
import logo from '../images/starwarslogo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaUser, FaSearch } from 'react-icons/fa';

function Vehicles() {
    return (
        <div className="bg-black w-full min-h-screen mb-0">
            <nav className="grid justify-center p-6">

            <div className='flex-row flex items-stretch'>
                <span  className='search'>
                    <form className="flex justify-end p-6 mt-8 rounded-full bg-black">
                    <button type="submit" className="btn-search ml-0 py-2 text-white rounded-full">
                            <FaSearch />
                        </button>
                        <input type="text" name='search' className="bg-black text-white outline-none focus:shadow-outline px-4 py-2 w-full" placeholder="Search..." />   
                    </form>

                </span>
                <div className=''>
                    <img src={logo} alt="Logo" className=''/>
                </div>
                <div className='flex space-x-2 mt-10 lg:ml-auto sm:ml-96 text-white'>
                    <ul>
                    <li className='mt-8'><FaUser /></li>
                    <li>Sign In</li>
                    </ul>
                </div>
                
            </div>

                <div className="w-full block lg:flex lg:w-auto">
                    <div className="lg:space-x-52 text-sm font-medium leading-8 tracking-0 text-white hover:text-teal-200 ">
                        <a href="/test" className="block mt-4 lg:inline-block lg:mt-0 ">
                            FILMS
                        </a>
                        <a href="/test" className="block mt-4 lg:inline-block lg:mt-0">
                            CHARACTERS
                        </a>
                        <a href="/test" className="block mt-4 lg:inline-block lg:mt-0">
                            SERIES
                        </a>
                        <a href="/test" className="block mt-4 lg:inline-block lg:mt-0">
                            DATABANK
                        </a>
                    </div>
                </div>
            </nav>
            <div className='border-b-2  border-white  m-auto w-11/12 mt-4' />
            <div className='bg-gray-900 w-4/5 h-20 m-auto mt-10' />

            <div className='m-auto w-4/5 mt-10 grid grid-cols-3'>
                <div className='p-2'>
                    <ul className='space-y-4 text-white'>
                        <li><u>All</u></li>
                        <li><u>Creatures</u></li>
                        <li><u>Planets</u></li>
                        <li><u>Vehicles</u></li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <div className='flex flex-row flex-wrap gap-4 items-center'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <p className='text-center text-white'><a href='/test' className="card-title text-l font-medium">Card Title</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='footer m-auto mt-5'>
                <div className='border-b-2 border-white m-auto w-11/12 ' />
                <div className="flex flex justify-center space-x-10 m-auto mt-8 text-2xl text-white">
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                </div>
                <p className='text-xl text-white text-center mt-8'>Sinatra Pod</p>

            </div>
        </div>

    )
}

export default Vehicles;