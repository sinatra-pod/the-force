import React from "react";
import FilmsList from "../components/Films/FilmsList";

const films = [
  {
    id: 1,
    title: "Starwars welcome to galaxy",
    description:
      "'Star Wars' is a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics,",
  },
  {
    id: 2,
    title: "Starwars welcome to galaxy",
    description:
      "'Star Wars' is a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics,",
  },
  {
    id: 3,
    title: "Starwars welcome to galaxy",
    description:
      "'Star Wars' is a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics,",
  },
  {
    id: 4,
    title: "Starwars welcome to galaxy",
    description:
      "'Star Wars' is a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics,",
  },
  {
    id: 5,
    title: "Starwars welcome to galaxy",
    description:
      "'Star Wars' is a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics,",
  },
];

function Home() {
  const banner = 'https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665'


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto text-white mt-4">
        <section className="flex py-20">
          <div className="w-[40%]">
          <img className={'object-cover w-full h-[40vh]'} src={banner} alt={''}/>

          </div>
          <div className="w-[60%] bg-[#EA2D1C1A] px-4">
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

        <section className="py-4">
          <h2 className="text-red-900 font-semibold text-lg my-2 uppercase">All Films</h2>
          <h4 className="uppercase font-extralight"><span className="font-semibold">Latest</span> Seasons</h4>
          <FilmsList films={films} />
        </section>
      </main>
    </div>
  );
}

export default Home;
