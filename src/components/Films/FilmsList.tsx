import React from "react";
import FilmDetail from "./FilmDetail";

const FilmsList = ({films}: any) => {
  return (
    <div className="flex justify-start gap-8 flex-wrap">
      {films ? (
        films.map((film: any, index: number) => <FilmDetail key={index} film={film} />)
      ) : (
        <>No films to load</>
      )}
    </div>
  );
};

export default FilmsList;
