import React from 'react';
import logo from './logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="ALX Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
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
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;