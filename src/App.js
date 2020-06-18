import React from 'react';
import logo from '~/assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Template <code>Dragon Fire</code>.
        </p>

        <a
          className="App-link"
          href="https://github.com/julianoalvescode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Juliano Alves <span>🐉</span>
        </a>
      </header>
    </div>
  );
}

export default App;
