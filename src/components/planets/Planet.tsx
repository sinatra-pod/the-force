import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Planet() {
  // const [openTab, setOpenTab] = React.useState(1);
  const navigate = useNavigate();
  const banner =
    "https://lumiere-a.akamaihd.net/v1/images/aa-9-coruscant-freighter_a856053d.jpeg?region=92%2C0%2C1181%2C665";

  const planets = [
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
    {
      id: 6,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 7,
      title: "The Phantom Menace",
      image: "https://i.postimg.cc/0ybdytWT/download.jpg",
      description:
        "Star Warsis a space opera fran chise created by George Lucas that revolves around a group of rebels fighting against an evil empire. The franchise includes multiple films, books, comics",
    },
    {
      id: 8,
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
    <>
      <div className="bg-black container mx-auto w-full min-h-screen mb-0">
        <section className="flex py-20">
          <div className="w-[40%]">
            <img
              className={"object-cover w-full h-[40vh]"}
              src={banner}
              alt={""}
            />
          </div>
          <div className="w-[60%] text-white bg-[#EA2D1C1A] px-4">
            <h2 className="text-3xl font-semibold uppercase my-4">Star Wars</h2>

            <div className="space-y-8">
              <p className="font-extralight text-lg">
                "Star Wars" is a space opera franchise created by George Lucas
                that revolves around a group of rebels fighting against an evil
                empire. The franchise includes multiple films, books, comics,
                and other media. The original "Star Wars" trilogy, released in
                the late 1970s and early 1980s, tells the story of Luke
                Skywalker and his journey to become a Jedi and defeat the
                Empire.
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
            <div className="w-full gap-8 flex-wrap flex justify-start items-center">
              {planets.map((character) => (
                <div className={"flex flex-col"}>
                  <img
                    className={"object-cover h-96 rounded-t-lg"}
                    src={character.image}
                    alt={""}
                  />
                  <h1 className={"text-lg text-white my-4"}>
                    {character.title}
                  </h1>
                  <button onClick={() => handleSubmit(character)} className="relative text-white w-[60%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-red-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                    <span className="relative text-white w-[100%] px-5 py-4 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                      Planet Details
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Planet;
