import React from 'react'

function Films() {
  return (
      <div className='bg-black text-white'>
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


        </div>



  )
}

export default Films