import React from "react";
import AltLogo from "../images//starwars_alt_logo.jpg"
export function Starships(){

    const ships = [1,1,1,1,1,1,1,1,1,1].map((value) => {
        return(
            <StarshipItem
                logo={AltLogo}
                title={'Starwars welcome to galaxy'}
                description={'Star wars is a space opera from chise created by George'} />
        )
    })

    return (
        <div className={''}>
            <div className={'flex flex-col md:flex-row lg:flex-row mt-2'}>
                <img className={'object-cover w-full md:w-96 md:h-96 lg:w-100 lg:h-100'} src={AltLogo} alt={''}/>
                <div className={'w-full md:h-96 lg:h-100 md:w-3/5 lg:w-5/7 m5 bg-[#EA2D1C1A]'}>
                    <div className={'flex flex-col'}>
                        <h2 className={'text-4xl px-4 md:pt-5 lg:pt-5 text-[#E0E0E0] font-extrabold'}>
                            INTERSTELLAR TRAVEL
                        </h2>
                        <p className={'text pt-2 px-4 text-[#BDBDBD] font-regular tracking-wide'}>
                            A starship, also known as a starcruiser, spaceship, spacecraft, or simply just craft or ship,
                            was a vessel designed for interstellar travel, specifically between star systems.<br/>

                            Starships were distinguished by the inclusion of a hyperdrive,
                            a piece of equipment that made hyperspace travel possible. <br/><br/>

                            Interstellar flight became possible with the invention of the dual-drive system.
                            Starships used sublight drives to leave a planet's gravity well and the hyperdrive
                            to travel between stars faster than light speed.<br/>

                            Plotting a course to a star system was a highly complex operation.
                            Calculations to travel at light speed were left up to a navigation computer
                            or astromech droid.<br/>
                        </p>
                    </div>
                </div>

                <div className={'flex flex-col w-full md:w-2/5 lg:w-2/7 md:ml-4 lg:ml-5'}>
                    <h3 className={'text-2xl px-1 text-white font-extrabold'}>
                        More...
                    </h3>
                    <button className={'w-max p-3 mt-5 bg-[#828282] text-white font-extrabold rounded-md'}>
                        SEE ALL STARSHIPS
                    </button>
                    <button className={'w-max p-3 mt-5 bg-[#828282] text-white font-extrabold rounded-md'}>
                        RETIRED SHIPS
                    </button>
                </div>
            </div>

            <h2 className={'text-4xl px-1 mt-20 mb-2 font-extrabold'}>
                ALL ABOARD THE STARSHIP
            </h2>

            <div className={'grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 mt-4'}>
                { ships }
            </div>
        </div>
    )
}

function StarshipItem ({ logo,  title, description }) {
    return (
        <div className={'flex flex-col'}>
            <img className={'object-cover h-96 rounded-t-lg'} src={logo} alt={''}/>
            <h1 className={'text-2xl px-1 text-white'}>
                {title}
            </h1>
            <p className={'px-1 mt-2 text-white text-l'}>
                {description}
            </p>
            <button className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                WATCH PREVIEW
            </button>
        </div>
    )
}