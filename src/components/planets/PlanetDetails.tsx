import React from 'react'
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/data/useData";
import { gql } from "@apollo/client";
import { AppLoader } from "../AppLoader";
import { AppError } from "../AppError";
import { planetInfo } from "../../utils/starwarimages";


function PlanetDetails() {
  const { id } = useParams()
  const { loading, error, data } = useData(
    gql`query GetPlanetsDetail($nodeId: ID!) {
      node(id: $nodeId) {
        ... on Planet {
          id
          name
          population
        }
       }
      }
      `, {
    variables: { 'nodeId': id }
  }
  )
  let node = {}

  if (data) {
    node = data.node
  }
  const planetData = planetInfo()

  return (
    <>
      <div className='flex items-center justify-center'>
        {loading ? <AppLoader /> : <></>}
      </div>

      <div className="bg-black w-full min-h-screen mb-0">
        <div className='container mx-auto md:container md:mx-auto mt-10 text-white flex  '>
          {error ? <AppError message={error.message} /> : <></>}
          {data ? <>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

              <div className="xl:w-2/5 lg:w-2/5 md:w1/2 w-80 md:block h-fit">
                <img src={planetData.planetLogo} alt='banner'
                  className="w-full object-cover h-96 hover:object-scale-down" />
              </div>

              <div className="xl:w-3/5 md:w-1/2 lg:w-3/5 lg:ml-8 md:ml-6 md:mt-0 mt-6">

                <div className="border-b border-gray-200 pb-6">
                  <h1 className="lg:text-4xl text-xl font-semibold lg:leading-6 leading-7 text-white dark:text-white mt-2">
                    {node["name"]}
                  </h1>
                </div>

                <div className={'mt-5'}>
                  <p className="xl:pr-48 text-xl lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                    {planetData.planetDesc}
                  </p>

                </div>
              </div>
            </div>
          </> : <></>}
        </div>

      </div>
    </>
  )
}
export default PlanetDetails