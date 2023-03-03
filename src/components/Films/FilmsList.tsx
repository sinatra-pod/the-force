import React from "react";
import FilmDetail from "./FilmDetail";

const FilmsList = () => {

  let films = []
  return (
    <div className="flex justify-start gap-8 flex-wrap">
      {films ? (
        films.map((film: any, index: number) => <FilmDetail key={index} />)
      ) : (
        <>No films to load</>
      )}
    </div>
  );
};

export default FilmsList;
