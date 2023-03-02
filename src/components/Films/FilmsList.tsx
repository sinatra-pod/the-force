import React from "react";
import FilmDetail from "./FilmDetail";
import { images } from "../../utils/starwarsimages";


const FilmsList = ({ films }: any) => {

  return (
    <div className="flex justify-start gap-8 flex-wrap">
      {films ? (
        films.map((film: any, index: number) => {
          const i = Math.floor(Math.random() * 10)
          return <FilmDetail key={index} film={film} image={images[i]} />
        })
      ) : (
        <>No films to load</>
      )}
    </div>
  );
};

export default FilmsList;
