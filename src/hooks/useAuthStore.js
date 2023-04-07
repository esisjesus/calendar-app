import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signInWithPassword } from "../firebase/auth/authFunctions"

export const useAuthStore = () => {
    const authState = useSelector(state => state.auth)
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
        if( !validateEmail( email ) ) return setStatusMessage("Ivalid email")
        
        
        //If filters are passed go for the sign in
        const response = await signInWithPassword( formObject )
        
        // If user id is not included in the response as expected, set the error message in the response
        if( !response.id ) return setStatusMessage(response.message.includes("password") ? "Wrong password" : "Invalid email" )
        
        //If everythin goes well update auth state 👌
        setStatusMessage("Login successful")
        
        dispatch( authState.login( {username: response.name, id: response.uid} ) )
        
    }

    return {
        statusMessage,
        validateAndSubmitForLoginWithEmail
    }
}
