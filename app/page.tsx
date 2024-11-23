import './globals.css';
import Link from 'next/link';


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
        {/* Login Button */}
        <Link href="/login">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#CECECE',
              color: 'black',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Log in
          </button>
        </Link>

        {/* Sign Up Button */}
        <Link href="/signup">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#6AA84F',
              color: 'white',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign up
          </button>
        </Link>

        {/* Account Button */}
        <Link href="/setup_account">
          <button
            style={{
              padding: '10px',
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1.5rem',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>👤</span>
          </button>
        </Link>
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
