import React from 'react';
import {
  Routes, 
  Route, 
  Link
} from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const backpacker = "On a day trip to Switzerland or penny-pinching to make the trip last longer?";
  const budget = "Would you like to experience the true Switzerland, but still want to stay within budget?"; 
  const family = "Traveling as a family? Whether you are traveling with young kids or adults we have it all!";
  


  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>    
      </Routes>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className='hero'>
        <h4>Planning a trip to Switzerland?</h4>
        <h1>Discover Switzerland on a budget</h1>
      </div>
      <div>
        <Card category="Backpacker" description={backpacker}>
          <Button>Show More</Button>
        </Card>
        <Card category="Budget" description={budget}>
          <Button>Show More</Button>
        </Card>
        <Card category="Family" description={family}>
          <Button>Show More</Button>
        </Card>
      </div>
    </>
  );
}

export default App;
