import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config";
const googleProvider = new GoogleAuthProvider();

export const signUpWithGooglePopup = async() => {
    //Try to login with google popup if succesful returns user information
    try {

        const signInResponse = await signInWithPopup( auth, googleProvider )
        const { user } = signInResponse
        return user

    } catch (error) {
        console.error('An error occurred while signing in in with google')
        return new Error(error)
    }

}

export const signInWithPassword = async(userInfo) => {

    const { email, password } = userInfo

    //Try to login if succesful returns user information
    try {
        const createUserResponse = await signInWithEmailAndPassword(auth, email, password)
        const { user } = createUserResponse
        return user

    } catch (error) {
        
        console.error('An error occurred while signing in')
        return new Error(error)

    }

}

export const signUserOut = async() => {
    try {
        await signOut( auth )
    } catch (error) {
        console.error('An error occurred trying to logout')
    }
}

export const createAccout = async(userInfo) => {

    const { email, password } = userInfo

    //Try to create account if succesful returns user information
    try {
        const createUserResponse = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = createUserResponse
        return user

    } catch (error) {
        
        console.error('An error occurred while creating account')
        return new Error(error)

    }

}