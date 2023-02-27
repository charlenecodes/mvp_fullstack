import React from 'react';
// import {
//   Routes, 
//   Route, 
//   Link
// } from 'react-router-dom';
import './App.css';
import CartButton from './components/CartButton';
import Card from './components/Card';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
// import Button from './components/Button';
// import Contact from "./components/Contact";

function App() {
  async function cartCounter() {
    let response = awa
    let count = CartButton.length;
    return count;
  }

  const backpacker = "On a day trip to Switzerland or penny-pinching to make the trip last longer?";
  const budget = "Would you like to experience the true Switzerland, but still want to stay within budget?"; 
  const family = "Traveling as a family? Whether you are traveling with young kids or adults we have it all!";
  
  const backpackerImg = "https://images.pexels.com/photos/844528/pexels-photo-844528.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const budgetImg = "https://images.pexels.com/photos/7862091/pexels-photo-7862091.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const familyImg ="https://images.pexels.com/photos/5637770/pexels-photo-5637770.jpeg?auto=compress&cs=tinysrgb&w=1600" 

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="all" element={}></Route>
        <Route path="backpacker" element={}></Route>
        <Route path="budget" element={}></Route> 
        <Route path="family" element={}></Route>     
      </Routes> */}
      
      <div className='m-6'>
        <CartButton cartCounter={cartCounter}></CartButton>
      </div>
      <div className=''>
        <Hero></Hero>
      </div>
      
      <div className='m-6'>
        <Intro></Intro>
      </div>
      
      <div className='cards'>
        <div className='row offset-1 offset-sm-3 offset-md-1 justify-content-evenly'>
          <div className='mt-5 col'>
            <Card category="Backpacker" description={backpacker} img = {backpackerImg}>
            </Card>
          </div>
          <div className='mt-5 col'>
            <Card category="Budget" description={budget} img={budgetImg}>
            </Card>
          </div>
          <div className='mt-5 col'>
            <Card category="Family" description={family} img={familyImg}>
            </Card>
          </div>
        </div>
      </div>
      {/* why are the spacing not working? */}
      <div className='mt-6'>
        <About></About>
      </div>
      
      
    </>
  );
}

export default App;
