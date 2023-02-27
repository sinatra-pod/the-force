import React from "react";
// import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
function Register() {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">THE FORCE</h2>
          <div className="flex justify-between py-8">
              <a className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center"  href="/google"><FcGoogle className="mr-2" /> Google</a>
              <a className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" href="/facebook"><AiFillFacebook className="mr-2" /> Facebook</a>
          </div>
          <div className="flex flex-col mb-4">
            
            <label>Email</label>
            <input type="email" className="border relative bg-gray-100 p-2" />
          </div >
          <div className="flex flex-col  mb-4">
            <label>Password</label>
            <input type="password" className="border relative bg-gray-100 p-2" />
          </div>

          <div className="flex flex-col ">
            <label>Confirm Password</label>
            <input type="password" className="border relative bg-gray-100 p-2" />
          </div>
          <button className="w-full py-4 mt-8 bg-zinc-900/90 text-white">Sign Up</button>
          <div>
            <a className="text-center mt-8" href="/login">Login to your existing account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;