import React from 'react'
import { Link } from 'react-router-dom'

const FilmItem = ({id, logo, title, description}) => {
  return (
    <div className={'flex flex-col min-h-[100px]'}>
            <img className={'object-cover h-96 rounded-t-lg'} src={logo} alt={''}/>
            <div className={'flex flex-col h-64 items-start justify-between'}>
                <h1 className={'text-2xl mt-3 px-1 text-white font-semibold'}>
                    {title}
                </h1>
                <p className={'px-1 mt-2 text-white font-extralight text-lg'}>
                    {description}
                </p>
                <Link
                    to={`/film/${id}`}
                    className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                    FILM DETAILS
                </Link>
            </div>
        </div>
  )
}

export default FilmItem