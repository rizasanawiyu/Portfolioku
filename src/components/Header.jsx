import React from 'react';

export default function Header() {
  const headerStyle = {
    width: '100%',
  };
  const containerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#00A8FF",
  };
  const navStyle = {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
  };
  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '1rem',
    background: '#00A8FF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>WEBKU</div>
        <ul style={navStyle}>
          <li><a href="#home" style={linkStyle}>Home</a></li>
          <li><a href="#about" style={linkStyle}>About</a></li>
          <li><a href="#portfolio" style={linkStyle}>Portfolio</a></li>
        </ul>
        <button style={buttonStyle}>Login</button>
      </div>
    </header>
  );
}
