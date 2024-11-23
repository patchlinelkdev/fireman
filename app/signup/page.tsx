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
        {/* Back to Home Button */}
        <Link href="/">
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
            Back to Home
          </button>
        </Link>
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

        {/* Login Container */}
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
          {/* Circle with Person Icon */}
          <div
            style={{
              width: '100px',
              height: '100px',
              margin: '0 auto',
              backgroundColor: '#F0F0F0',
              border: '3px solid #D9D9D9',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '3rem',
              marginBottom: '20px',
            }}
          >
            👤 {/* Person icon */}
          </div>

          {/* Email Input */}
          <input
            type="text"
            placeholder="Email address"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '1rem',
              textAlign: 'center', // Center the placeholder
              border: '1px solid #D9D9D9',
              borderRadius: '5px',
              backgroundColor: '#F8F8F8',
              boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
              boxSizing: 'border-box',
            }}
          />
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              fontSize: '1rem',
              textAlign: 'center', // Center the placeholder
              border: '1px solid #D9D9D9',
              borderRadius: '5px',
              backgroundColor: '#F8F8F8',
              boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
              boxSizing: 'border-box',
            }}
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              fontSize: '1rem',
              textAlign: 'center', // Center the placeholder
              border: '1px solid #D9D9D9',
              borderRadius: '5px',
              backgroundColor: '#F8F8F8',
              boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
              boxSizing: 'border-box',
            }}
          />

          {/* Login Button */}
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#6AA84F',
              color: 'white',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
}
