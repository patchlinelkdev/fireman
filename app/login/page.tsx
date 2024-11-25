import BackToHomeBtn from '../components/LoginPage/BackToHomeBtn';
import LoginForm from '../components/LoginPage/LoginForm';
import '../globals.css';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      {/* Top 10vh empty space */}
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
        }}
      >

        <BackToHomeBtn />
      </div>

      {/* Background container */}
      <div
        style={{
          position: 'absolute',
          top: '10vh',
          bottom: '10vh',
          left: '0',
          width: '100vw',
          height: 'calc(100vh - 20vh)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'url(/images/background.png) no-repeat center center',
            backgroundSize: 'cover',
            filter: 'brightness(30%)',
            zIndex: '1',
          }}
        ></div>

          <LoginForm />
        
      </div>
    </>
  );
}
