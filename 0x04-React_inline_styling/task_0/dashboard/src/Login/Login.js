import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  margin: {
    margin: '20px', // Add margin around the login form
  },
});

function Login() {
  return (
    <div className={css(styles.margin)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default Login;