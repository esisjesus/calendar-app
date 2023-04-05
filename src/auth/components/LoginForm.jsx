import { createAccout, signInWithPassword } from "../../firebase/auth/authFunctions"
import { useLoginForm } from "../../hooks/useLoginForm"

const formStructure = {
    email: '',
    password: ''
}

export const LoginForm = () => {

    const {formValues, handleInputChange} = useLoginForm(formStructure)

    //TODO: Function that validates form values, login and update global state with user info

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }
    
    const validateAndSubmitForLoginWithEmail = (formObject) => {
        
        const { email } = formObject
        //Validate Form Values to fit the requirements
        //validate email
        if( !validateEmail( email ) ) return
        
        
        //If filters are passed go for the sign in
        signInWithPassword( formObject )
        
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        validateAndSubmitForLoginWithEmail(formValues)

    }

    return (
            <form onSubmit={handleSubmit} className='bg-green-500 p-6 h-screen w-screen md:h-auto md:w-full rounded-tl-lg rounded-bl-lg'>
                <h1 className='text-2xl text-center mb-4 text-white font-bold'>Login</h1>
                <h2 className='text-white font-bold'>Email</h2>
                <input type="email" placeholder='example@mail.com'  className='my-2 rounded-lg text-lg p-2 w-full' name="email" value={ formValues.email } onChange={ handleInputChange }/>
                <h2 className='text-white font-bold'>Password</h2>
                <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full' name="password" value={ formValues.password } onChange={ handleInputChange }/>
                <br/>
                <div className="text-center">
                <button className='bg-white text-green-500 p-3 rounded-md w-full mt-3 font-bold hover:bg-green-800 hover:text-white' type='submit'>Login</button>
                <span className="text-white inline-block my-2">or</span>
                <button  className='bg-white text-red-500 p-3 rounded-md w-full mt-3 font-bold hover:bg-red-700 hover:text-white' type='submit'>  Sign in with Google</button>
                </div>
            </form>
    )
}
