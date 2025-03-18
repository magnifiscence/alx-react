import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../holberton-logo.jpg';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#282c34', // Dark background color
    padding: '20px', // Padding around the header
    color: 'white', // Text color
    textAlign: 'center', // Center-align text
  },
  logo: {
    height: '50px', // Set logo height
    pointerEvents: 'none', // Disable pointer events on the logo
  },
});

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.logo)} alt="ALX Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;