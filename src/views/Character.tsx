import React from "react";
// import SearchForm from "../components/form/SearchForm";
import { Link } from "react-router-dom";

function Databank() {
  const banner = 'https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665'

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
  return (
    <div className="bg-black container mx-auto w-full min-h-screen mb-0">
      <section className="flex">
        <div className="w-[40%]">
        <img className={'object-cover w-full h-[40vh]'} src={banner} alt={''}/>
        </div>
        <div className="w-[60%] text-white bg-[#EA2D1C1A] px-4">
          <h2 className="text-3xl font-semibold uppercase my-4">Star Wars</h2>

          <div className="space-y-8">
            <p className="font-extralight text-lg">
              "Star Wars" is a space opera franchise created by George Lucas
              that revolves around a group of rebels fighting against an evil
              empire. The franchise includes multiple films, books, comics, and
              other media. The original "Star Wars" trilogy, released in the
              late 1970s and early 1980s, tells the story of Luke Skywalker and
              his journey to become a Jedi and defeat the Empire.
            </p>
            <p className="font-extralight text-lg">
              In the prequel trilogy, the backstory of Darth Vader is explored.
              The prequels follow Jedi Knight Qui-Gon Jinn and his apprentice
              Obi-Wan Kenobi as they encounter a young Anakin Skywalker, who
              eventually becomes Darth Vader. The prequels show the Republic's
              downfall and the rise of the Empire.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-10 w-full">
        <h2 className="text-red-900 font-semibold text-lg my-2 uppercase">
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
                <h1 className={"text-lg text-white mt-4"}>{character.title}</h1>
                <Link
                  to={`/character/${character.id}`}
                  className={
                    "border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max"
                  }
                >
                  WATCH PREVIEW
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databank;
