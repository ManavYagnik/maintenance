import React from 'react';

const App = () => {
  return (
    <div style={styles.body}>
      <div style={styles.message}>
        <h1 style={styles.heading}>Website is under maintenance</h1>
        <p>We are currently performing maintenance. Please check back later.</p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  message: {
    backgroundColor: '#ffffff',
    padding: '20px',
    border: '2px solid #cccccc',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
  },
};

export default App;
