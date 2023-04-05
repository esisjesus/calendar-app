import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";
const googleProvider = new GoogleAuthProvider();

export const signUpWithGooglePopup = async(evt) => {
    evt.preventDefault()
    //Try to login with google popup if succesful returns user information
    try {

        const signInResponse = await signInWithPopup( auth, googleProvider )
        const { user } = signInResponse
        console.log(user);
        return user

    } catch (error) {
        console.error('An error occurred while signing in in with google')
        throw new Error(error)
    }

}

export const createAccout = async(evt, userInfo) => {
    evt.preventDefault()

    const { email, password } = userInfo

    //Try to create account if succesful returns user information
    try {
        const createUserResponse = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = createUserResponse
        console.log(user);
        return user

    } catch (error) {
        
        console.error('An error occurred while creating an account')
        throw new Error(error)

    }

}