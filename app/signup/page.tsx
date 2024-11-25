import BackToHomeBtn from '../components/SignupPage/BackToHomeBtn';
import SignupForm from '../components/SignupPage/SignupForm';
import '../globals.css';

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

          {/* Sign up Container */}
          <div
            style={{

              position: 'relative',
              zIndex: '2',
              background: 'linear-gradient(145deg, #e0e0e0, #c2c2c2)', // Gradient background
              borderRadius: '20px',
              padding: '30px',
              width: '300px',
              textAlign: 'center',

            }}
          >
            <SignupForm />
          </div>      
      </div>
    </>
  );
}
