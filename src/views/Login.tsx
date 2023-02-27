import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from  'react-icons/go'
import { AiFillFacebook } from "react-icons/ai";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import uselogin
import {useLoginWithGithub} from '../hooks/useLoginWithGithub'


function Login() {
  const navigate: any = useNavigate();
  const provider: any= new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const {loginWithGithub, error:gitHubLoginError} = useLoginWithGithub()

  const onLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result: any) =>{
        // const credential: any | null = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user
        navigate("/")

      }).catch((error: any)=>{
        // const email = error.customData./email;
        // const credential: any | null = GoogleAuthProvider.credentialFromError(error);
        
      })
  };
  return (
    <div>
      {gitHubLoginError && <p>{gitHubLoginError}</p>}
      <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[500px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">THE FORCE</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={onLogin}>
              <FcGoogle className="mr-2"  /> Google
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center" onClick={loginWithGithub}>
              <GoMarkGithub className="mr-2"  /> GitHub
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center">
              <AiFillFacebook className="mr-2" /> Facebook
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="email"
              className="border relative bg-gray-100 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border relative bg-gray-100 p-2"
            />
          </div>
          <button
            className="w-full py-4 mt-8 bg-zinc-900/90 text-white"
          >
            Sign In
          </button>
          <div>
            <p className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p className="text-center mt-8">Create an account</p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
