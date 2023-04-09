import { useAuthStore } from "../../hooks/useAuthStore"
import { useLoginForm } from "../../hooks/useLoginForm"

const formStructure = {
    username: '',
    email: '',
    password: '',
    lockpassword:''
}

export const RegisterForm = () => {

    const {formValues, handleInputChange} = useLoginForm(formStructure)

    const { statusMessage, validateAndSubmitForCreateAccount } = useAuthStore()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        validateAndSubmitForCreateAccount(formValues)

    }


    return (
            <form onSubmit={ handleSubmit }  className='bg-white p-6 border-r border-t border-b border-gray-300 h-screen w-screen md:h-auto md:w-full rounded-tr-lg rounded-br-lg'>
                <h1 className='text-2xl text-center mb-4 text-green-500 font-bold'>Register</h1>
                <h2 className='text-green-500 font-bold'>Name</h2>
                <input type="text" placeholder='Example Rodriguez'  className='my-2 rounded-lg text-lg p-2 w-full border-gray-300 border' name='username' value={ formValues.username } onChange={ handleInputChange }/>
                <h2 className='text-green-500 font-bold'>Email</h2>
                <input type="email" placeholder='example@mail.com'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border' name='email' value={ formValues.email } onChange={ handleInputChange }/>
                <h2 className='text-green-500 font-bold'>Password</h2>
                <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border' name='password' value={ formValues.password } onChange={ handleInputChange }/>
                <h2 className='text-green-500 font-bold'>Repeat password</h2>
                <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border' name='lockpassword' value={ formValues.lockpassword } onChange={ handleInputChange }/>
                <br/>
                { statusMessage &&  <span className="rounded-md px-2 text-sm text-red-500 bg-red-300" >{statusMessage}</span>}
                <button type="submit" className='bg-green-500 text-white p-3 rounded-md w-full mt-3 font-bold hover:bg-green-800'>Create account</button>
            </form>
    )
}
