import LoginBtn from './components/HomePage/LoginBtn';
import ProfileBtn from './components/HomePage/ProfileBtn';
import SignupBtn from './components/HomePage/SignupBtn';
import './globals.css';


export default function Home() {
  return (
    <>
      {/* Top 10vh empty space for the buttons */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100vw',
          height: '10vh',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '10px',
          gap: '10px',
        }}
      >
        
        <LoginBtn />

        <SignupBtn />        

        <ProfileBtn />

      </div>

      {/* Background container */}
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '80vh',
          top: '10vh',
          left: '0',
          background: 'url(/images/background.png) no-repeat center center',
          backgroundSize: 'cover',
          filter: 'brightness(50%)',
          zIndex: '1', // Set the background at a lower layer
        }}
      ></div>

      {/* Text content */}
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '80vh',
          top: '10vh',
          left: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '2', // Ensure the text is above the background
        }}
      >
        <div
          style={{
            fontSize: '10rem',
            fontWeight: 'bold',
            color: '#FFFFFF',
            letterSpacing: '0.3rem',
          }}
        >
          FIREMAN
        </div>
      </div>
    </>
  );
}
