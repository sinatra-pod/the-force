import {AuthData} from "./types";
import {Constants} from "./constants";

export const successAuth = (credential): AuthData => {
    return {
        status: 'success',
        user_data: credential.user
    }
}

export const failureAuth = (error): AuthData => {
    return {
        status: 'failed',
        message: error.message
    }
}

export const storeUser = (email) => localStorage.setItem(Constants.LOGGED_IN_USER, email)

export const resetUser = () => localStorage.removeItem(Constants.LOGGED_IN_USER)

export const getUser = (): string|null => localStorage.getItem(Constants.LOGGED_IN_USER)