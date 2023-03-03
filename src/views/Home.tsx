import React from "react";
import { getUser } from "../utils/authData";
import { useNavigate } from "react-router-dom";
import FilmsList from "../components/Films/FilmsList";
import { useData } from "../hooks/data/useData";
import { gql } from "@apollo/client";
import { AppLoader } from "../components/AppLoader";
import { AppError } from "../components/AppError";
import { shipDescriptions, shipsImages } from "../utils/starwarimages";
import FilmItem from "../components/Films/FilmItem";

function Home() {
  const navigate = useNavigate();
  if (!getUser()) navigate("/login");

  const banner =
    "https://images.unsplash.com/flagged/photo-1589829482673-03413c918c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

  const { loading, error, data } = useData(
    gql`
      query ExampleQuery {
        allFilms {
          films {
            id
            director
            title
            releaseDate
          }
        }
      }
    `
  );

  const formatDesc = (input): string => `${input.slice(0, 150)} ...`;

  let films = [];

  if (data) {
    films = data.allFilms.films;
  }

  const filmData = films.map((film) => {
    const filmLogo = shipsImages[Math.floor(Math.random() * 7)];
    const fimlDesc = shipDescriptions[Math.floor(Math.random() * 4)];

    return (
      <FilmItem
        key={film["id"]}
        id={film["id"]}
        logo={filmLogo}
        title={film["title"]}
        description={formatDesc(fimlDesc)}
      />
    );
  });

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

          {loading ? <AppLoader /> : <></>}

          {data ? (
            <div
              className={
                "grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 mt-4 mb-5"
              }
            >
              {filmData}
            </div>
          ) : (
            <></>
          )}

          {error ? <AppError message={error.message} /> : <></>}
          {/* <FilmsList films={films} /> */}
        </section>
      </main>
    </div>
  );
}

export default Home;
