import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../images/starwarslogo.png';

function Films() {
  return (
      <div className='bg-black text-white'>
          <nav className="grid justify-center p-6">
            <div className='flex-row flex items-stretch'>
                <span  className=''>
                    <form className="flex justify-end p-6 mt-8 rounded-full bg-black">
                    <button type="submit" className="btn-search ml-0 py-2 text-white rounded-full">
                            <FaSearch />
                        </button>
                        <input type="text" name='search' className="bg-black text-white outline-none focus:shadow-outline px-4 py-2 w-full" placeholder="Search..." />
                    </form>
                </span>
                <div className=''>
                    {/* <img src={logo} alt="Logo" className=''/> */}
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
          <h1 className="text-4xl mt-10 ">Star Wars Films</h1>

          <div className='text-center'>
             <h3 className=" ">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</h3>
          </div>

          <div className='text-4xl mt-10 border-b-4 border-neutral-500 w-97 ml-64'>
             <h3 className=" ">Browse Films</h3>
          </div>

          <div className="grid grid-cols-6 gap-4 ml-56">
                <div className="col-start-1 col-end- ml-32 mt-16">
                    <a href='/films'><h1 >ALL FILMS</h1></a>
                    <a href='/#'><h2 >BY RELEASE YEAR</h2></a>
                </div><div className="col-start-2 col-end-6">
                    <div className="w-full max-w-screen-md m-auto text-center bg-black">
                        <div className="flex flex-wrap justify-between mt-16">
                            <div className="w-1/3 mb-10 text-left">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" alt="starwar" />
                                <h2 className="text-2xl mb-2.5">A New Hope</h2>
                                <p className="text-sm text-gray-500">Released: 1977</p>
                            </div>
                            <div className="w-1/3 mb-10 text-left">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg" alt="starwar" />
                                <h2 className="text-2xl mb-2.5">The Empire Strikes Back</h2>
                                <p className="text-sm text-gray-500">Released: 1980</p>We
                            </div>
                            <div className="w-1/3 mb-10 text-left">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" alt="starwar" />
                                <h2 className="text-2xl mb-2.5">Return of the Jedi</h2>
                                <p className="text-sm text-gray-500">Released: 1983</p>
                            </div>
                            <div className="w-1/3 mb-10 text-left">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" alt="starwar" />
                                <h2 className="text-2xl mb-2.5">Return of the Jedi</h2>
                                <p className="text-sm text-gray-500">Released: 1983</p>
                            </div>
                            <div className="w-1/3 mb-10 text-left">
                                <img src="https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg" alt="starwar" />
                                <h2 className="text-2xl mb-2.5">Return of the Jedi</h2>
                                <p className="text-sm text-gray-500">Released: 1983</p>
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

export default Films