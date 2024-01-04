import React, { useState, useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() =>{
    fetch("http://localhost:3001/home")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;