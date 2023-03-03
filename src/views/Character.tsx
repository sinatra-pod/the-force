import React from "react";
// import SearchForm from "../components/form/SearchForm";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Databank() {
  const navigate = useNavigate();

  const banner =
  "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

  const characters = [
    {
      id: 1,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 2,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 3,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 4,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 5,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
  ];

  const handleSubmit = (item: any) => {
    navigate(`/character/${item.id}`);
  };

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
        <div className="flex h-auto py-8 items-center justify-center w-full">
          <div className="w-full gap-8 flex-wrap flex justify-start items-center">
            {characters.map((character) => (
              <div className={"flex flex-col"}>
                <img
                  className={"object-cover h-96 rounded-t-lg"}
                  src={character.image}
                  alt={""}
                />
                <h1 className={"text-lg text-white my-4"}>{character.title}</h1>
                <button
                  onClick={() => handleSubmit(character)}
                  className="relative text-white w-[80%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-red-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                >
                  <span className="relative text-white w-[100%] px-5 py-4 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                    Character Details
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databank;
