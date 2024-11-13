// App.js
import React from 'react';

function App() {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: 0,
      backgroundColor: '#f2f2f2',
    },
    container: {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    heading: {
      color: '#d9534f',
    },
    paragraph: {
      fontSize: '1.2em',
      color: '#555',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Maintenance Mode</h1>
        <p style={styles.paragraph}>
          Our site is currently undergoing scheduled maintenance. We will be back
          shortly. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}

export default App;
