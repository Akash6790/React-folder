import './App.css';
import About from './components/about';
import Navbar from './components/navnar';
import Textforms from './components/textforms';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const enable = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' black ';
       document.body.style.color = 'white'; 
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ' white ';
       document.body.style.color = 'black'; 
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} enable={enable} />
      <div className="container">
        <Textforms heading="Enter you text here :" />
      </div>
      <div className="container my-3">
        <About />
      </div>

    </>
  );
}

export default App;
