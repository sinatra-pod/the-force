import {GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../utils/firebase'
import {useCallback} from 'react'

export const useLoginWithGithub = () => {
    const loginWithGithub = useCallback(async () => {
        const provider = new GithubAuthProvider()
        const result = await signInWithPopup(auth, provider)
        return result
    }, [])
    return loginWithGithub
    }

// Path: src/pages/Login.tsx