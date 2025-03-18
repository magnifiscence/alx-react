import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <div>
          <label htmlFor="email" onClick={() => document.getElementById('email').focus()}>
            Email:
          </label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password" onClick={() => document.getElementById('password').focus()}>
            Password:
          </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="button">OK</button>
      </form>
    </>
  );
}

export default Login;