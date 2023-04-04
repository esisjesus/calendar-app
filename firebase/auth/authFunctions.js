import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
        console.error('Hubo un problema al iniciar sesion con Google')
        throw new Error(error)
    }

}