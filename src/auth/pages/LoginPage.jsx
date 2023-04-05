import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export const LoginPage = () => {

  return (
    <div className='w-screen flex justify-center items-center md:h-screen'>

      <div className='flex rounded-lg flex-col w-screen md:h-auto md:w-4/6 md:flex-row xl:w-3/6'>

          <LoginForm/>
          
          <RegisterForm/>
          
      </div>
      
    </div>
  );
};
