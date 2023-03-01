import React from "react";
import useHeader from "../hooks/useHeader";
import {getUser} from "../utils/authData";
import {useNavigate} from "react-router-dom";
import {Starships} from "./Starships";

function Home() {

    const navigate = useNavigate()
    if (!getUser()) navigate('/login')

  // extract the header from the hook
  // Header extracted will be used to determine the current page

  // extract the header from the hook
  // Header extracted will be used to determine the current page
  const { header } = useHeader("Home");

  return (
      <div className={"text-red-400"}>
          <Starships/>
      </div>
 /*   <div className="text-red-400 text-4xl flex justify-center items-center h-[100vh] text-center">
      {/!*This the {header} Page*!/}

    </div>*/
  );
}

export default Home;
