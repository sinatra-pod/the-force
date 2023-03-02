import React, {useState} from "react";
import {FcGoogle} from "react-icons/fc";
import {GoMarkGithub} from 'react-icons/go';
import {Link} from "react-router-dom";
import {AuthType, useSocialAuth} from "../hooks/auth/useSocialAuth";
import {useEmailPasswordAuth} from "../hooks/auth/useEmailPasswordAuth";


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[500px] w-full mx-auto bg-white p-8"
              onSubmit={useEmailPasswordAuth(false, email, password, setError)}>
          <h2 className="text-4xl font-bold text-center py-4">THE FORCE</h2>
          <div className="flex justify-between py-8">
            <button className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={useSocialAuth(AuthType.GOOGLE)}>
              <FcGoogle className="mr-2"  /> Google
            </button>
            <button className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={useSocialAuth(AuthType.GITHUB)}>
              <GoMarkGithub className="mr-2"  /> GitHub
            </button>
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="email"
              className="border relative bg-gray-100 p-2"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border relative bg-gray-100 p-2"
              value={password} onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <button
            className="w-full py-4 mt-8 bg-zinc-900/90 text-white">
            Sign In
          </button>
          <div>
            <p className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <Link to={'/register'}>
              <p className="text-center mt-8">Create an account</p>
            </Link>

            { error ? <span className="flex bg-red-300 p-3 mt-3 rounded-full justify-center">
            Oops. An error occurred.<br/>
              {error["code"]}
          </span> : <></> }

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
