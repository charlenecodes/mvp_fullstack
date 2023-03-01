import React, { useEffect, useState } from 'react';
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
// import Contact from "./components/Contact";



// the handleClickAdd function will be for the add to cart buttons
function handleClickAdd(){
  
}

// the handleClickRemove function will be for the X buttons that remove items from cart
function handleClickRemove(){
  
}

// each time the handleClick functions is called, increase/decrease the count in the cart
function cartCounter() {
  let count = 0;
  count++;
  return count;
}

function App() {
  let [experiences, setExperiences] = useState([])

  const fetchExperiences = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences`)
      let data = await results.json();
      // console.log(data)
      setExperiences(data)
    } catch(err) {
      console.log(err)
    }
  };
    
  useEffect(() => {
    fetchExperiences();
  }, []);

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
      
      <div className=''>
        <CartButton cartCounter={cartCounter}></CartButton>
      </div>
      <div className=''>
        <Hero></Hero>
      </div>
      
      <div>
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

      {/* temporary placement of all experiences - need to be in its own page, create a new component */}
      <div>
        {experiences.map(experience => (
          <div key={experience.id}>
            <img src={experience.img}></img>
            <h4>{experience.name}</h4>
            <p>{experience.info}</p>
          </div>
        )
          
        )}
      </div>

      <br/>
      <br/>
      {/* why are the Bootstrap spacing not working? */}
      <div className='mt-6'>
        <About></About>
      </div>
      <br/>
      <br/>
      
      
    </>
  );
}

export default App;
