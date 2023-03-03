import React from "react";
// import SearchForm from "../components/form/SearchForm";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks/data/useData";
import { gql } from "@apollo/client";
import { shipDescriptions, images } from "../utils/starwarimages";
import CharacterItem from "../components/characters/CharacterItem";
import { AppError } from "../components/AppError";
import { AppLoader } from "../components/AppLoader";

function Databank() {
  const navigate = useNavigate();

  const banner =
    "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

  const { loading, error, data } = useData(
    gql`
      query ExampleQuery {
        allPeople {
          people {
            id
            height
            hairColor
            gender
            eyeColor
            skinColor
            name
            mass
          }
        }
      }
    `
  );

  const formatDesc = (input): string => `${input.slice(0, 150)} ...`;

  let characterData = [];

  if (data) {
    characterData = data.allPeople.people;
  }

  const characters = characterData.map((character) => {
    const characterLogo = images[Math.floor(Math.random() * 10)];
    const characterDesc = shipDescriptions[Math.floor(Math.random() * 4)];

    return (
      <CharacterItem
        key={character["id"]}
        id={character["id"]}
        logo={characterLogo}
        title={character["name"]}
        description={formatDesc(characterDesc)}
      />
    );
  });

  // const handleSubmit = (item: any) => {
  //   navigate(`/character/${item.id}`);
  // };

  return (
    <div className="bg-black container mx-auto w-full min-h-screen mb-0">
      <section className="flex mt-4">
        <div className="w-[60%] text-white bg-[#EA2D1C1A] px-4">
          <h2 className="text-3xl font-semibold uppercase my-4">Grogu</h2>

          <div className="space-y-8">
            <p className="font-extralight text-lg">
              A mysterious child pursued by bounty hunters on behalf of Imperial
              interests, the foundling Grogu found protection with the
              Mandalorian Din Djarin. Through their adventures and journeys
              through the galaxy, young Grogu is honing remarkable abilities.
              Although he previously trained as a Jedi, Grogu has chosen to
              return to Din's side and continues to share his adventures as they
              take a stand against the Imperial remnant.
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <img
            className={"object-cover w-full h-[40vh]"}
            src={banner}
            alt={""}
          />
        </div>
      </section>
      <div className="mt-10 w-full">
        <h2 className="text-red-900 font-semibold text-xl my-2 uppercase">
          All Characters
        </h2>

        {loading ? <AppLoader /> : <></>}
          {data ? (
            <div className={'grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 mt-4 mb-5'}>
              {characters}
            </div>
          ) : (
            <></>
          )}
        </div>

        {error ? <AppError message={error.message} /> : <></>}
      </div>
  );
}

export default Databank;
