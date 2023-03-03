import React from "react";
import { getUser } from "../utils/authData";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  if (!getUser()) navigate("/login");

    const banner =
    "https://images.unsplash.com/flagged/photo-1589829482673-03413c918c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto text-white mt-4">
        <section className="flex">
          <div className="w-[40%]">
            <img
              className={"object-cover w-full h-[40vh]"}
              src={banner}
              alt={""}
            />
          </div>
          <div className="w-[60%] bg-[#EA2D1C1A] px-4">
            <h2 className="text-3xl font-semibold uppercase my-4">
              Star Wars: The Rise of Skywalker
            </h2>

            <div className="space-y-8">
              <p className="font-extralight text-lg">
                Lucasfilm and director J.J. Abrams join forces once more to take
                viewers on an epic journey to a galaxy far, far away with Star
                Wars: The Rise of Skywalker, the riveting conclusion of the
                landmark Skywalker saga, in which new legends will be born and
                the final battle for freedom is yet to come.
              </p>
            </div>
          </div>
        </section>

        <section className="py-4">
          <h2 className="text-red-900 font-semibold text-lg my-2 uppercase">
            All Films
          </h2>
          <h4 className="uppercase font-extralight">
            <span className="font-semibold">Latest</span> Seasons
          </h4>
          <FilmsList films={films} />
        </section>
      </main>
    </div>
  );
}

export default Home;
