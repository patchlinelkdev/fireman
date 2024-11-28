import BackToHomeBtn from '../components/LoginPage/BackToHomeBtn';
import LoginForm from '../components/LoginPage/LoginForm';
import '../globals.css';

export default function Login() {
  return (
    <>
      {/* Top 10vh empty space */}
      <div className="absolute top-0 left-0 w-screen h-[10vh] flex justify-end items-center pr-2.5">
        <BackToHomeBtn />
      </div>

      {/* Background container */}
      <div className="absolute top-[10vh] bottom-[10vh] left-0 w-screen h-[calc(100vh-20vh)] flex justify-center items-center">
        {/* Background image */}
        <div
          className="absolute bg-[url('/images/background.png')] top-0 left-0 w-full h-full bg-cover bg-center filter brightness-[30%] z-[1]"
        ></div>

        <LoginForm />
      </div>
    </>
  );
}
