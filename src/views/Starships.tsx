import React from "react";
import {gql} from "@apollo/client";
import {StarshipItem} from "../components/starships/StarshipItem";
import {useData} from "../hooks/data/useData";
import {AppLoader} from "../components/AppLoader";
import {AppError} from "../components/AppError";
import {shipDescriptions, shipsImages} from "../utils/starwarimages";
export function Starships(){

    const { loading, error, data } = useData(
        gql `query ExampleQuery {
              allStarships {
                starships {
                  cargoCapacity
                  consumables
                  id
                  crew
                  created
                  costInCredits
                  length
                  maxAtmospheringSpeed
                  name
                  passengers
                  starshipClass
                  edited
                  hyperdriveRating
                  manufacturers
                }
              }
        }`)

    const banner = 'https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665'

    const formatDesc = (input): string => `${input.slice(0, 150)} ...`

    let starShips = []

    if(data){
        starShips = data.allStarships.starships
    }

    const ships = starShips.map((ship) => {

        const shipLogo = shipsImages[Math.floor(Math.random() * 7)]
        const shipDesc = shipDescriptions[Math.floor(Math.random() * 4)]

        return(
            <StarshipItem
                key={ship["id"]}
                id={ship["id"]}
                logo={shipLogo}
                title={ship["name"]}
                description={formatDesc(shipDesc)} />
        )
    })

    return (
        <div className={'container mx-auto'}>

            <div className={'flex flex-col md:flex-row lg:flex-row mt-10'}>
                <img className={'object-cover w-full md:w-[40vh] lg:w-[40vh] h-[40vh]'} src={banner} alt={''}/>

                <div className={'w-full h-[40vh] m5 bg-[#EA2D1C1A]'}>
                    <div className={'flex flex-col'}>
                        <h2 className={'text-4xl px-4 md:pt-5 lg:pt-5 text-[#E0E0E0] font-semibold'}>
                            INTERSTELLAR TRAVEL
                        </h2>
                        <p className={'text-white pt-2 px-4 tracking-wide font-extralight text-lg'}>
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
            </div>

            <h2 className={'text-4xl px-1 mt-20 mb-2 font-semibold text-[#E02312]'}>
                ALL ABOARD THE STARSHIP
            </h2>

            { loading ? <AppLoader/> : <></> }

            { data ?
                <div className={'grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 mt-4 mb-5'}>
                    { ships }
                </div> : <></> }

            { error ? <AppError message={error.message}/> : <></> }


        </div>
    )
}
