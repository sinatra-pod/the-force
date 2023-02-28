import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

export const useAuth = (type: AuthType = 0) => {
    const navigate = useNavigate()

    // set provider
    let provider: GoogleAuthProvider | GithubAuthProvider | null = null
    switch (type) {
        case AuthType.GOOGLE:
            provider = new GoogleAuthProvider()
            break
        case AuthType.GITHUB:
            provider = new GithubAuthProvider()
            break
        case AuthType.FACEBOOK:
            break
    }

    return async () => {
        if(provider) await signInWithPopup(auth, provider)
            .then((_r) => { navigate('/') })
            .catch((_e) => false)
    }

}

export enum AuthType {
    GOOGLE = 0,
    GITHUB = 1,
    FACEBOOK = 2
}