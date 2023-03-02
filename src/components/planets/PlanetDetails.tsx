import React from 'react'

function PlanetDetails() {
  return (
    <div className="bg-black w-full min-h-screen mb-0">
      <div className='border-b-2  border-white  m-auto w-11/12 mt-4' />
      <div className='bg-gray-900 w-4/5 h-20 m-auto mt-10' />
      <div className='container mx-auto md:container md:mx-auto mt-10 text-white flex  '>

        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img src="https://i.postimg.cc/0ybdytWT/download.jpg" alt='banner' className="w-full" />
          </div>
          <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-white dark:text-white mt-2">Star Wars: A New Hope (Episode IV)
              </h1>
            </div>
            <div>
              <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Ratings: PG</p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Release Date: 23th May 2020</p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Genre: Adventure, Fantasy, Science Fiction</p>

              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">Luke Skywalker begins a journey that will change the galaxy in Star Wars: Episode IV - A New Hope. Nineteen years after the formation of the Empire, Luke is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke’s Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia from the clutches of Darth Vader and the evil Empire.</p>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default PlanetDetails