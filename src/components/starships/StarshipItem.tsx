import React from "react";
import { useNavigate } from "react-router-dom";

export function StarshipItem({ id, logo, title, description }) {
  const navigate = useNavigate();

  const handleSubmit = (id: any) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className={"flex flex-col min-h-[100px]"}>
      <img className={"object-cover h-96 rounded-t-lg"} src={logo} alt={""} />
      <div
        className={"flex flex-col h-[15vh] my-4 items-start justify-between"}
      >
        <h1 className={"text-2xl font-semibold px-1 text-white"}>{title}</h1>
        <p className={"px-1 text-white font-extralight"}>{description}</p>

        <button
          onClick={() => handleSubmit(id)}
          className="relative text-white w-[60%] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-red-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
        >
          <span className="relative text-white w-[100%] px-5 py-4 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
            SHIP DETAILS
          </span>
        </button>
      </div>
    </div>
  );
}
