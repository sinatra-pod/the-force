import React from "react";
import {useParams} from "react-router-dom";
import {useData} from "../../hooks/data/useData";
import {gql} from "@apollo/client";
import {AppLoader} from "../AppLoader";
import {AppError} from "../AppError";
import {shipDescriptions, shipsImages, starShipInfo} from "../../utils/starwarimages";

export function StarshipDetails() {

    const { id } = useParams()
    const { loading, error, data } = useData(
        gql`query GetStarshipDetail($nodeId: ID!) {
              node(id: $nodeId) {
                ... on Starship {
                  name
                  model
                  hyperdriveRating
                  starshipClass
                  manufacturers
                  maxAtmospheringSpeed
                  passengers
                }
              }
            }
        `, {
            variables: { 'nodeId': id }
        }
    )


    let node = {}

    if(data){
        node = data.node
    }

    // get images and descriptions
    const shipData = starShipInfo()

    return (
        <div className="bg-black w-full min-h-screen mb-0">

             <div className='container mx-auto mt-10 text-white flex  flex-col'>

                 { loading ? <AppLoader/> : <></> }

                 { error ? <AppError message={error.message}/> : <></> }

                 { data ? <>
                     <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

                         <div className="xl:w-2/5 lg:w-2/5 md:w1/2 w-80 md:block h-fit">
                             <img src={shipData.shipLogo} alt='banner'
                                  className="w-full object-cover h-96 hover:object-scale-down"/>
                         </div>

                         <div className="xl:w-3/5 md:w-1/2 lg:w-3/5 lg:ml-8 md:ml-6 md:mt-0 mt-6">

                             <div className="border-b border-gray-200 pb-6">
                                 <h1 className="lg:text-4xl text-xl font-semibold lg:leading-6 leading-7 text-white dark:text-white mt-2">
                                     {node["name"]}
                                 </h1>
                             </div>

                             <div className={'mt-5'}>
                                 <div className={'flex flex-row'}>
                                     <p className={'text-2xl font-bold text-[#E02312]'}>SPEED :</p>
                                     <p className={'text-white text-xl justify-center ml-4'}>{node["maxAtmospheringSpeed"]}</p>
                                 </div>

                                 <div className={'flex flex-row mt-2'}>
                                     <p className={'text-2xl font-bold text-[#E02312]'}>NO. PASSENGERS :</p>
                                     <p className={'text-white text-xl justify-center ml-4'}>{node["passengers"]}</p>
                                 </div>

                                 <div className={'flex flex-row mt-2'}>
                                     <p className={'text-2xl font-bold text-[#E02312]'}>MANUFACTURERS :</p>
                                     <p className={'text-white text-xl justify-center ml-4'}>{node["manufacturers"][0]}</p>
                                 </div>

                                 <div className={'flex flex-row mt-2'}>
                                     <p className={'text-2xl font-bold text-[#E02312]'}>CLASS :</p>
                                     <p className={'text-white text-xl justify-center ml-4'}>{node["starshipClass"]}</p>
                                 </div>

                                 <div className={'flex flex-row mt-2'}>
                                     <p className={'text-2xl font-bold text-[#E02312]'}>RATING :</p>
                                     <p className={'text-white text-xl justify-center ml-4'}>{node["hyperdriveRating"]}/5</p>
                                 </div>

                                 <p className="xl:pr-48 text-xl lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                                     {shipData.shipDesc}
                                 </p>

                             </div>
                         </div>
                     </div>
                     <div className={'flex justify-between mt-[5%]'}>

                         <h2 className={'text-sky-400 text-2xl mx-5 mt-[5%] border-4 border-sky-400 p-5 rounded-full hover:bg-sky-400 hover:text-white'}>
                             Yoda
                         </h2>

                         <h2 className={'text-yellow-200 text-2xl mx-5 mt-[5%] border-4 border-yellow-200 p-5 rounded-full hover:bg-yellow-200 hover:text-black'}>
                             Empire strikes back
                         </h2>

                         <h2 className={'text-teal-500 text-2xl mx-5 mt-[5%] border-4 border-teal-500 p-5 rounded-full hover:bg-teal-500 hover:text-white'}>
                             Crosshair
                         </h2>

                         <h2 className={'text-rose-500 text-2xl mx-5 mt-[5%] border-4 border-rose-500 p-5 rounded-full hover:bg-rose-500 hover:text-white'}>
                             Mandalorian
                         </h2>

                         <h2 className={'text-orange-500 text-2xl mx-5 mt-[5%] border-4 border-orange-500 p-5 rounded-full hover:bg-orange-500 hover:text-white'}>
                             Ryloth
                         </h2>

                         <h2 className={'text-teal-500 text-2xl mx-5 mt-[5%] border-4 border-teal-500 p-5 rounded-full hover:bg-teal-500 hover:text-white'}>
                             Luke Skywalker
                         </h2>

                     </div>
                 </> : <></> }

            </div>
        </div>
    )
}