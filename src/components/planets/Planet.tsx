import React from "react";
import { Link } from "react-router-dom";
import { gql } from '@apollo/client';
import { useData } from "../../hooks/data/useData";
import { planetInfo } from "../../utils/starwarimages";

function Planet() {
  const banner =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";


  const { loading, error, data } = useData(gql` query GetPlanets {
    allPlanets {
      planets {
        id
        name
        population
        orbitalPeriod
      }
    }
  }`, {})
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const planets = data.allPlanets.planets

  // console.log("=====================--==",);
  // const handleSubmit = (item: any) => {
  //   navigate(`/character/${item.id}`);
  // };
  const formatDesc = (input): string => `${input.slice(0, 150)} ...`

  return (
    <>
      <div className="bg-black container mx-auto w-full min-h-screen mb-0">
        <section className="flex mt-4">
          <div className="w-[40%]">
            <img
              className={"object-cover w-full h-[40vh]"}
              src={banner}
              alt={""}
            />
          </div>
          <div className="w-[60%] text-white bg-[#EA2D1C1A] px-4">
            <h2 className="text-3xl font-semibold uppercase my-4">Force Planet</h2>

            <div className="space-y-8">
              <p className="font-extralight text-lg">
                Force Planet Not marked on any star map and not recognized with
                any specific name, the Force planet is a mystical world and the
                foundation of life itself. It is the birthplace of the
                midi-chlorians, microscopic organisms that connect the living
                Force to the cosmic Force. Surrounded by a bright nebula, the
                Force planet is a barren place, featuring only luminescent
                geysers that shoot energy from deep within the world. Several
                islands hover above the surface, each teeming with plant life
                and strong with the Force
              </p>
              <p className="font-extralight text-lg">
                In the prequel trilogy, the backstory of Darth Vader is
                explored. The prequels follow Jedi Knight Qui-Gon Jinn and his
                apprentice Obi-Wan Kenobi as they encounter a young Anakin
                Skywalker, who eventually becomes Darth Vader. The prequels show
                the Republic's downfall and the rise of the Empire.
              </p>
            </div>
          </div>
        </section>
        <div className="mt-10 w-full">
          <h2 className="text-red-900 font-semibold text-lg my-2 uppercase">
            All Characters
          </h2>
          <div className="flex h-auto py-8 items-center justify-center w-full">
            <div className={'grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 mt-4 mb-5'}>
              {planets.map((character) => {
                const planetData = planetInfo()
                return (

                  <div className={'flex flex-col min-h-[100px]'} key={character.id}>
                    <img className={'object-cover h-96 rounded-t-lg'} src={planetData.planetLogo} alt={''} />
                    <div className={'flex flex-col h-64 items-start justify-between'}>
                      <h1 className={'text-2xl px-1 text-white font-semibold'}>
                        {character.name}
                      </h1>
                      <p className={'px-1 mt-2 text-white font-extralight text-lg'}>
                        {formatDesc(planetData.planetDesc)}
                      </p>
                      <Link
                        to={`/planet/${character.id}`}
                        className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                        PLANET DETAILS
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Planet;
