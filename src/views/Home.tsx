import React from "react";
import { getUser } from "../utils/authData";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
];

function Home() {
  const navigate = useNavigate();
  if (!getUser()) navigate("/login");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 text-white mt-4">
        <section className="flex">
          <div className="w-[50%] px-20 py-2 space-y-10">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-xl">Story By</h3>
                <p className="font-extralight text-lg mt-2">John Doe</p>
                <p className="font-extralight text-lg">John Doe</p>
                <p className="font-extralight text-lg">John Doe</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Directed By</h3>
                <p className="font-extralight text-lg mt-2">John Doe</p>
                <p className="font-extralight text-lg">John Doe</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Music</h3>
                <p className="font-extralight text-lg mt-2">John Doe</p>
              </div>
            </div>
            <div className="space-y-8">
              <h1 className="text-6xl font-semibold uppercase">
                May the force be with you
              </h1>
              <p className="font-extralight">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                non?
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="focus:outline-none w-[40%] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2"
                >
                  Filled
                </button>

                <button className="relative w-[40%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-red-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                  <span className="relative w-[100%] px-5 py-5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                    Outlined
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="starwars"
            />
          </div>
        </section>

        <section className="flex gap-4 px-20 py-20">
          <div className="w-[30%]">
            <img
              className=""
              src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </div>
          <div className="w-[70%]">
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

        <section className="px-20 py-4">
          <h2 className="text-red-900 font-semibold text-lg my-2 uppercase">All Films</h2>
          <h4 className="uppercase font-extralight"><span className="font-semibold">Latest</span> Seasons</h4>
          <FilmsList films={films} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
