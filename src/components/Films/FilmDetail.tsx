import React from "react";

const FilmDetail = ({ film }: any) => {
  return (
    <div className="w-[25%]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="single film"
        />
      </div>

      <div className="my-2 space-y-4">
        <h3 className="font-semibold text-xl">{film.title}</h3>
        <p className="font-extralight">{film.description}</p>
        <button className="relative w-[40%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-red-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
          <span className="relative w-[100%] px-5 py-5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
            Outlined
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilmDetail;
