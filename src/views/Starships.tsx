import React from "react";
import {StarshipItem} from "../components/starships/StarshipItem";
import {StarshipDetails} from "../components/starships/StarshipDetails";
export function Starships(){

    const banner = 'https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665'

    const starShips = [
        {
            id:'c3RhcnNoaXBzOjI',
            title: 'Naboo Royal Starship',
            description: 'The Naboo Royal Starship boasts a strikingly beautiful design that embodies the craftsmanship that prevailed in the peaceful years of the Republic. The polished, streamlined J-type 327 Nubian vessel lacks any offensive weaponry, but does feature strong shields and a competent hyperdrive. During the Trade Federation invasion of Naboo, Queen Amidala and her retinue escaped aboard the Royal Starship. Piloted by Ric Olie, the vessel narrowly avoided the Trade Federation blockade, though its hyperdrive was damaged. The ship limped to Tatooine, where a replacement T-14 hyperdrive generator was procured.',
            logo: 'https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg?region=0%2C0%2C1560%2C878',
            speed: '950 km/h',
            passengers: '600',
            manufacturers:'Corellian Engineering Corporation',
            starshipClass: 'corvette',
            rating: '2'

        },
        {
            id:'c3RhcnNoaXBzOjIx5',
            title: '\n' +
                'Gobi Glie\'s Starship',
            description: 'Gobi Glie\'s starship may not look like much from the outside, but it holds untold riches for a young Hera Syndulla. At the controls of the craft, Gobi teaches the young girl how to fly on instinct, entrusting her with his ship with the exception of take-off and landing. The craft is also an essential part of the freedom fighter\'s work to shore up armaments for Ryloth after the Imperial occupation begins in the time of the Empire. On one occasion, Gobi and Hera met Clone Force 99 on Ryloth\'s moon to secure weapons for the coming civil war, smuggling the elicit cargo inside the ship\'s ample hold.',
            logo: 'https://lumiere-a.akamaihd.net/v1/images/gobi-gile-s-starship-main_51805deb.jpeg?region=158%2C0%2C964%2C542',
            speed: '950 km/h',
            passengers: '700',
            manufacturers:'Corellian Engineering Corporation',
            starshipClass: 'corvette',
            rating: '5'

        },
        {
            id:'-Xc3RhcnNoaXBzOjI',
            title: 'ARC-170 Starfighter',
            description: 'Protecting the skies over Republic worlds were specialized clone fighter forces flying the latest in starfighter technology. The ARC-170 fighter was a bulky, aggressive ship covered with weapons. Three clone trooper pilots operated this advanced combat craft, with a pilot handling the flight maneuvers, a copilot operating the laser cannons mounted on the ship\'s wide wings, and a tailgunner operating the dorsal rear-facing cannon. The fighter also carried an astromech droid for onboard repairs.',
            logo: 'https://lumiere-a.akamaihd.net/v1/images/databank_arc170starfighter_01_169_f932abcb.jpeg?region=0%2C0%2C1560%2C878',
            speed: '1950 km/h',
            passengers: '890',
            manufacturers:'Corellian Corporation',
            starshipClass: 'Fighter',
            rating: '4'

        },
        {
            id:'c3RhcnNoasdadsaXBzOjI',
            title: 'A-wing trainer (RZ-1T)',
            description: 'The RZ-1T, an A-wing trainer, featured room for two passengers, allowing for novice pilots to have an instructor on board. It was developed in the early days of the rebellion against the Empire, and used by Kanan and Ezra of the Ghost team.',
            logo: 'https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg?region=0%2C0%2C1560%2C878',
            speed: '760 km/h',
            passengers: '160',
            manufacturers:'Engineering Corporation',
            starshipClass: 'corvette',
            rating: '2'

        }
    ]

    const formatDesc = (input): string => `${input.slice(0, 150)} ...`



    const ships = starShips.map((ship) => {
        return(
            <StarshipItem
                id={ship.id}
                logo={ship.logo}
                title={ship.title}
                description={formatDesc(ship.description)} />
        )
    })

    const shipDetails = starShips.map((ship) => {
        return (
            <StarshipDetails
                id={ship.id}
                logo={ship.logo}
                title={ship.title}
                description={ship.description}
                speed={ship.speed}
                passengers={ship.passengers}
                manufacturers={ship.manufacturers}
                starshipClass={ship.title}
                rating={ship.rating} />
        )
    })

    return (
        <div className={'container mx-auto'}>
            <div>
                {shipDetails}
            </div>

            <div className={'flex flex-col md:flex-row lg:flex-row mt-2'}>
                <img className={'object-cover w-full md:w-96 md:h-96 lg:w-100 lg:h-100'} src={banner} alt={''}/>
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





