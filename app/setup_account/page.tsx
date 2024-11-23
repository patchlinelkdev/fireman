// app/account_setup/page.tsx
/*import 'app/globals.css';  // Use the correct relative path to reach the global.css file*/

export default function AccountSetup() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
      }}
    >
      <h1>Account Setup</h1>
      <input type="text" placeholder="Enter your name" style={{ marginBottom: '10px', padding: '10px' }} />
      <input type="email" placeholder="Enter your email" style={{ marginBottom: '10px', padding: '10px' }} />
      <input type="password" placeholder="Enter your password" style={{ marginBottom: '10px', padding: '10px' }} />
      <button style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  );
}
