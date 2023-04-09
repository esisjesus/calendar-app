import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createAccout, signInWithPassword, signUpWithGooglePopup } from "../firebase/auth/authFunctions"
import { login } from "../store"
import { updateProfile } from "firebase/auth"

export const useAuthStore = () => {
    const dispatch = useDispatch()

    const [statusMessage, setStatusMessage] = useState("")


    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }
    
    const validateAndSubmitForLoginWithEmail = async (formObject) => {
        
        const { email } = formObject
        //Validate Form Values to fit the requirements

        //validate email
        if( !validateEmail( email ) ) return setStatusMessage("Invalid email")
        
        
        //If filters are passed go for the sign in
        const response = await signInWithPassword( formObject )
        
        // If user id is not included in the response as expected, set the error message in the response
        if( !response.uid ) return setStatusMessage(response.message.includes("password") ? "Wrong password" : "Invalid email" )
        
        //If everythin goes well update auth state 👌
        setStatusMessage("")
        
        dispatch( login( {username: response.displayName, id: response.uid} ) )
        
    }

    const validateAndSubmitForCreateAccount = async (formObject) => {
        const { username, email, password, lockpassword } = formObject
        //Validate Form Values to fit the requirements

        //validate email
        if( !validateEmail( email ) ) return setStatusMessage("Invalid email")
        
        if( password.length < 6 || password != lockpassword ) return setStatusMessage("Password must have at leat 6 characters and equal")
        //If filters are passed go for the sign in
        const response = await createAccout( formObject )
        if( !response.uid ) return setStatusMessage( response.message )
        
        await updateProfile(response, {displayName: username})

        //If everythin goes well update auth state 👌
        setStatusMessage("")
        
        dispatch(login( {username: username, id: response.uid} ))
        
    }

    const handleGoogleLogin = async() => {
        const response = await signUpWithGooglePopup()
        if( !response.uid ) return setStatusMessage( response.message )

        //If everythin goes well update auth state 👌
        setStatusMessage("")
        
        dispatch(login( {username: response.displayName, id: response.uid} ))
    }

    //TODO FINISH THE LOGIN AND CREATE ACCOUNT FLOW, AND UPDATE OF THE STATE

    return {
        statusMessage,
        validateAndSubmitForLoginWithEmail,
        validateAndSubmitForCreateAccount,
        handleGoogleLogin
    }
}
