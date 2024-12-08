import BackToHomeBtn from '../components/LoginPage/BackToHomeBtn';
import LoginForm from '../components/LoginPage/LoginForm';
import LoginFormMobile from '../components/LoginPage/LoginFormMobile';
import RememberMeCheck from '../components/LoginPage/RememberMeCheck';

export default function Login() {
  return (
    <>
      <div className="hidden lg:block md:block">
        {/* Top 10vh empty space */}
        <div className="absolute top-0 left-0 w-screen h-[10vh] flex justify-end items-center pr-2.5">
          <BackToHomeBtn />
        </div>

        {/* Background container */}
        <div className="absolute top-[10vh] bottom-[10vh] left-0 w-screen h-[calc(100vh-20vh)] flex justify-center items-center">
          {/* Background image */}
          <div className="absolute bg-[url('/images/background.png')] top-0 left-0 w-full h-full bg-cover bg-center filter brightness-[30%] z-[1]"></div>

          <LoginForm />
        </div>
      </div>

      <div className="lg:hidden md:hidden">
        <div className="flex justify-center h-screen w-screen bg-gradient-bg-m-i bg-center bg-cover bg-no-repeat text-white">
          <div className='text-center mx-10 mt-28'>
            <div>
              <h1 className='text-3xl font-semibold'>Welcome Back!</h1>
            </div>

            <div className='pt-24'>
              <LoginFormMobile />
            </div>

            <div className='text-sm text-gray-300 text-right pt-1'>Forgot Password?</div>

            <div className='flex justify-center pt-10'>
              <RememberMeCheck />
            </div>

            <div className='px-10 pt-16'>
              <p>
                Sign in to access your account and manage all your home services
                needs effortlessly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
