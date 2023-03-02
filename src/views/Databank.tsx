import React from 'react'
import SearchForm from '../components/form/SearchForm'
import { Link } from 'react-router-dom';

function Databank() {
  const databanks = [
    { id: 1, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 2, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 3, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 4, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" },
    { id: 5, title: "The Phantom Menace", image: "https://i.postimg.cc/0ybdytWT/download.jpg", description: "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics" }
  ]
  return (
    <div className="bg-black w-full min-h-screen mb-0">
      <div className='border-b-2  m-auto w-11/12 mt-4' />
      <div className='bg-zinc-700	 w-4/5 m-auto mt-10 rounded-md	'>
        <SearchForm />
      </div>
      <div className='container mx-auto md:container md:mx-auto mt-10 flex w-full'>
        <div className="flex h-auto  items-center justify-center w-full">
          <div className="w-full gap-4 flex-wrap flex justify-center items-center">
            {databanks.map((databank) => (
              <div className={'flex flex-col'}>
                <img className={'object-cover h-96 rounded-t-lg'} src={databank.image} alt={''} />
                <h1 className={'text-2xl px-1 text-white'}>
                  {databank.title}
                </h1>
                <Link to={`/databank/${databank.id}`} className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                  WATCH PREVIEW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



  )
}

export default Databank