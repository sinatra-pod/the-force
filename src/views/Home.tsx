import React from "react";
import useHeader from "../hooks/useHeader";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
function Home() {
  // extract the header from the hook
  // Header extracted will be used to determine the current page
  const { header } = useHeader("Home");

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">THE FORCE</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center">
              <FcGoogle className="mr-2" /> Google
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center">
              <AiFillFacebook className="mr-2" /> Facebook
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input type="text" className="border relative bg-gray-100 p-2" />
          </div >
          <div className="flex flex-col">
            <label>Password</label>
            <input type="password" className="border relative bg-gray-100 p-2" />
          </div>
          <button className="w-full py-4 mt-8 bg-zinc-900/90 text-white">Sign In</button>
          <div>
            <p className="flex items-center mt-2">
              <input type="checkbox"  className="mr-2"/>
              Remember Me
            </p>
            <p className="text-center mt-8">Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
