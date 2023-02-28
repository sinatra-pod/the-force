import {AuthData} from "./types";

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