import './App.css';
import About from './components/about';
import Navbar from './components/navnar';
import Textforms from './components/textforms';
import React, { useState } from 'react';
import Alert from './components/alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  let showalert = (message , type) => {
     setalert ({
      msg : message,
      type : type
     })// this function for disable the alert
     setTimeout(()=>{
       setalert(null)
     },3000)
  }

  const enable = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' black ';
       document.body.style.color = 'white'; 
       showalert("Dark mode is enabled " ,"success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ' white ';
       document.body.style.color = 'black'; 
       showalert("Dark mode is disabled " ,"warning");
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} enable={enable} />
      <Alert alert={alert}/>
      <div className="container">
        <Textforms heading="Enter you text here :" showalert={showalert} />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
 

    </>
  );
}

export default App;
