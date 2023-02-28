import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

export const useLoginWithGoogle = () => {
    const navigate = useNavigate()

    // set up provider
    const provider: GoogleAuthProvider = new GoogleAuthProvider()
    provider.addScope(process.env.REACT_APP_GOOGLE_AUTH_SCOPE as string)

    // log in with Google using popup
    return async () => {
        await signInWithPopup(auth, provider)
            .then((_r) => {
                navigate('/')
            })
            .catch((error) => false)
    };

}