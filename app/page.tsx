import LoginBtn from './components/HomePage/LoginBtn';
import ProfileBtn from './components/HomePage/ProfileBtn';
import SignupBtn from './components/HomePage/SignupBtn';

export default function Home() {
  return (
    <>
      {/* Top 10vh empty space for the buttons */}
      <div className="absolute top-0 left-0 w-screen h-[10vh] flex justify-end items-center pr-2 gap-3">
        <LoginBtn />
        <SignupBtn />
        <ProfileBtn />
      </div>

      {/* Background container */}
      <div
        className="absolute bg-[url('/images/background.png')] w-screen h-[80vh] top-[10vh] left-0 bg-center bg-cover bg-no-repeat filter brightness-50 z-[1]"
      ></div>

      {/* Text content */}

      <div className="absolute w-screen h-[80vh] top-[10vh] left-0 flex justify-center items-center z-20">
        <div className="text-white text-[10rem] font-bold tracking-[0.3rem]">
          FIREMAN
        </div>
      </div>
    </>
  );
}
