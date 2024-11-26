import BackToHomeBtn from '../components/SignupPage/BackToHomeBtn';
import SignupForm from '../components/SignupPage/SignupForm';
import '../globals.css';

export default function Login() {
  return (
    <>
      {/* Top 10vh empty space */}
      <div className="absolute top-0 left-0 w-full h-[10vh] flex justify-end items-center pr-2.5">
        <BackToHomeBtn />
      </div>

      {/* Background container */}
      <div className="absolute top-[10vh] bottom-[10vh] left-0 w-full h-[calc(100vh-20vh)] flex justify-center items-center">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter brightness-[30%]"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        ></div>

        {/* Sign up Container */}
        <div className="relative z-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-8 w-[300px] text-center">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
