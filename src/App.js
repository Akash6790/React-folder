import './App.css';
import About from './components/about';
import Navbar from './components/navnar';
// import Textforms from './components/textforms';

function App() {
  return (
    <>
    <Navbar title="Textutils"/>
    {/* <div className="container">
       <Textforms heading="Enter you text here :"/>
    </div> */}
    <div className="container">
        <About  />
    </div>
   
    </>
  );
}

export default App;
