import './App.css';
import About from './components/about';
import Navbar from './components/navnar';
import Textforms from './components/textforms';
import React, { useState } from 'react';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const [modes, setmodes] = useState("blue");

  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })// this function for disable the alert
    setTimeout(() => {
      setalert(null)
    }, 3000)
  }

  const enable = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' black ';
      document.body.style.color = 'white';
      showalert("Dark mode is enabled ", "success");
      document.title = "dark mode";// for this use usestate
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ' white ';
      document.body.style.color = 'black';
      showalert("Dark mode is disabled ", "warning");
      document.title = "light mode";
    }
  }
  const enablemode = () => {
    if (modes === "blue") {
      setmodes("orange");
      document.body.style.backgroundColor = ' orange ';
      document.body.style.color = 'white';
      showalert("red background is enabled ", "success")
    }
    else {
      setmodes("purple");
      document.body.style.backgroundColor = ' purple ';
      document.body.style.color = 'white';
      showalert("blue background is disabled ", "warning")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} enable={enable} enablemode={enablemode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={
            <div className="container">
              <Textforms heading="Enter your text here :" showalert={showalert} />
            </div>
          } />
          <Route path="/about" element={
            <div className="container my-3">
              <About />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
