import React from "react";
import AltLogo from "../images//starwars_alt_logo.jpg"
export function Starships(){

    const ships = [1,1,1,1,1,1,1,1,1].map((value) => {
        return(
            <StarshipItem logo={AltLogo} title={'Starwars welcome to galaxy'} description={'Star wars is a space opera from chise created by George'} />
        )
    })

    return (
        <div className={'flex flex-row'}>
            { ships }
        </div>
    )
}

function StarshipItem ({ logo,  title, description }) {
    return (
        <div className={'flex flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-5'}>
            <img className={'object-cover h-96'} src={logo} alt={''}/>
            <h1 className={'text-2xl px-1 text-white'}>
                {title}
            </h1>
            <p className={'px-1 mt-2 text-white text-l'}>
                {description}
            </p>
            <button className={'border border-4 mt-4 border-red-400 text-white p-2 hover:bg-red-400 w-max'}>
                WATCH PREVIEW
            </button>
        </div>
    )
}