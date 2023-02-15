export const LoginPage = () => {

  return (
    <div className='w-screen flex justify-center items-center md:h-screen'>
      <div className='flex rounded-lg flex-col w-screen md:h-auto md:w-4/6 md:flex-row xl:w-3/6'>
          <form className='bg-green-500 p-6 h-screen w-screen md:h-auto md:w-full rounded-tl-lg rounded-bl-lg'>
            <h1 className='text-2xl text-center mb-4 text-white font-bold'>Login</h1>
            <h2 className='text-white font-bold'>Email</h2>
            <input type="email" placeholder='example@mail.com'  className='my-2 rounded-lg text-lg p-2 w-full'/>
            <h2 className='text-white font-bold'>Password</h2>
            <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full'/>
            <br/>
            <button className='bg-white text-green-500 p-3 rounded-md w-full mt-3 font-bold hover:bg-green-800 hover:text-white' type='submit'>Login</button>
          </form>

          <form className='bg-white p-6 border-r border-t border-b border-gray-300 h-screen w-screen md:h-auto md:w-full rounded-tr-lg rounded-br-lg'>
            <h1 className='text-2xl text-center mb-4 text-green-500 font-bold'>Register</h1>
            <h2 className='text-green-500 font-bold'>Name</h2>
            <input type="text" placeholder='Example Rodriguez'  className='my-2 rounded-lg text-lg p-2 w-full border-gray-300 border'/>
            <h2 className='text-green-500 font-bold'>Email</h2>
            <input type="email" placeholder='example@mail.com'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border'/>
            <h2 className='text-green-500 font-bold'>Password</h2>
            <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border'/>
            <h2 className='text-green-500 font-bold'>Repeat password</h2>
            <input type="password" placeholder='Password'  className='my-2 rounded-lg text-lg p-2 w-full  border-gray-300 border'/>
            <br/>
            <button className='bg-green-500 text-white p-3 rounded-md w-full mt-3 font-bold hover:bg-green-800' type='submit'>Create account</button>
          </form>
      </div>
    </div>
  );
};
