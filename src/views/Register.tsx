import React, {FormEvent} from "react";
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {GoMarkGithub} from "react-icons/go";
import {Link} from "react-router-dom";
import {useLoginWithGithub} from "../hooks/auth/useLoginWithGithub";
import {useLoginWithGoogle} from "../hooks/auth/useLoginWithGoogle";

function Register() {
  const {loginWithGithub, error:gitHubLoginError} = useLoginWithGithub()

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[500px] w-full mx-auto bg-white p-8"
              onSubmit={ (e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <h2 className="text-4xl font-bold text-center py-4">THE FORCE</h2>
          <div className="flex justify-between py-8">
            <button className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={useLoginWithGoogle()}>
              <FcGoogle className="mr-2"  /> Google
            </button>
            <button className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={loginWithGithub}>
              <GoMarkGithub className="mr-2"  /> GitHub
            </button>
            <button className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center">
              <AiFillFacebook className="mr-2" /> Facebook
            </button>
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
          <Link to={'/login'}>
            <p className="text-center mt-8">Login to your existing account</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;