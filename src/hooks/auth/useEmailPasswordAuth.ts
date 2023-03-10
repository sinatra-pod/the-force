import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../utils/firebase";
import {useNavigate} from "react-router-dom";
import {storeUser} from "../../utils/authData";

export const useEmailPasswordAuth = (isLogin: boolean = true, email: string, password: string, errCallback) => {
    const navigate = useNavigate()

    if(isLogin){
        // login existing
        return async (e) => {
            e.preventDefault()
            await signInWithEmailAndPassword(auth, email, password)
                .then((credential) => {
                    storeUser(credential.user.email)
                    navigate('/')
                })
                .catch((error) => errCallback(error))
        }
    }else{
        // register new account
        return async (e) => {
            e.preventDefault()
            await createUserWithEmailAndPassword(auth, email, password)
                .then((credential) => {
                    storeUser(credential.user.email)
                    navigate('/')
                })
                .catch((error) => errCallback(error))
        }
    }
}

