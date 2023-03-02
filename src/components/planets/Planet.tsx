import React from 'react'
import { Link } from 'react-router-dom';
import 'alpinejs'


function Planet() {
  const [openTab, setOpenTab] = React.useState(1);
  const planets = [
    { id: 1, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 2, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 3, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 4, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 5, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 6, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 7, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 8, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" }
  ]
  return (
    <>
      <div className="flex flex-wrap min-h-full min-w-full bg-black	">
        <div className="w-full flex bg-black">
          <div className='flex text-white flex-row text-center min-h-full w-1/5'>
            <ul
              className="mb-0 list-none p pt-3 pb-4 block"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 block leading-normal "

                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> All Films
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  block leading-normal "
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i>  Realease By Year
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  block leading-normal "
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i>  Genre
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded min-h-full w-4/5">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="w-full gap-4 flex-wrap flex justify-center items-center">
                    {planets.map((planet) => (
                      <div className={'flex flex-col'}>
                        <img className={'object-cover h-96 rounded-t-lg'} src={planet.image} alt={''} />
                        <h1 className={'text-2xl px-1 text-white'}>
                          {planet.title}
                        </h1>
                        <Link to={`/planet/${planet.id}`} className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                          WATCH PREVIEW
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="w-full gap-4 flex-wrap flex justify-center items-center">
                  {planets.map((planet) => (
                    <div className={'flex flex-col'}>
                      <img className={'object-cover h-96 rounded-t-lg'} src={planet.image} alt={''} />
                      <h1 className={'text-2xl px-1 text-white'}>
                        {planet.title}
                      </h1>
                      <Link to={`/planet/${planet.id}`} className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                        WATCH PREVIEW
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="w-full gap-4 flex-wrap flex justify-center items-center">
                  {planets.map((planet) => (
                    <div className={'flex flex-col'}>
                      <img className={'object-cover h-96 rounded-t-lg'} src={planet.image} alt={''} />
                      <h1 className={'text-2xl px-1 text-white'}>
                        {planet.title}
                      </h1>
                      <Link to={`/planet/${planet.id}`} className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                        WATCH PREVIEW
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )


}
export default Planet
