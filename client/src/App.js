import React, { useEffect, useState } from 'react';
import './App.css';
import CartButton from './components/CartButton';
import Card from './components/Card';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import View from './components/View';
import Experiences from './components/Experiences';
import Backpacker from './components/Backpacker';
import Budget from './components/Budget';
import Family from './components/Family';

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
  let [backpackerExp, setBackpackerExp] = useState([])
  let [budgetExp, setBudgetExp] = useState([])
  let [famExp, setFamExp] = useState([])

  const fetchExperiences = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences`)
      let allExperiences = await results.json();
      console.log(allExperiences.data)
      setExperiences(allExperiences.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchBackpacker = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences/1`)
      let allBackpacker = await results.json();
      console.log(allBackpacker.data)
      setBackpackerExp(allBackpacker.data)
    } catch(err) {
      console.log(err)
    }
  };
  
  const fetchBudget = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences/2`)
      let allBudget = await results.json();
      console.log(allBudget.data)
      setBudgetExp(allBudget.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchFam = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences/3`)
      let allFam = await results.json();
      console.log(allFam.data)
      setFamExp(allFam.data)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchExperiences();
    fetchBackpacker();
    fetchBudget();
    fetchFam();
  }, []);

  const backpacker = "On a day trip to Switzerland or penny-pinching to make the trip last longer?";
  const budget = "Would you like to experience the true Switzerland, but still want to stay within budget?"; 
  const family = "Traveling as a family? Whether you are traveling with young kids or adults we have it all!";
  
  const backpackerImg = "https://images.pexels.com/photos/844528/pexels-photo-844528.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const budgetImg = "https://images.pexels.com/photos/7862091/pexels-photo-7862091.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const familyImg ="https://images.pexels.com/photos/5637770/pexels-photo-5637770.jpeg?auto=compress&cs=tinysrgb&w=1600" 

  return (
    <>
      <div className=''>
        <CartButton cartCounter={cartCounter}></CartButton>
      </div>

      <h4 className='text-center'>Experience<span style={{color: "#FC5F5F"}}>Switzerland</span></h4>

      <div className=''>
        <Hero></Hero>
      </div>
      
      <div>
        <Intro></Intro>
      </div>
      
      <div className='cards'>
        <div className='row offset-1 offset-sm-3 offset-md-1 justify-content-evenly'>
          <div className='mt-5 col'>
            <Card category="Backpacker" description={backpacker} img={backpackerImg}>
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

      <div id='experiences' className='mt-5'>
        <View></View>
        {/* need to set up react router to view this as a separate page */}
        <Experiences experiences={experiences}></Experiences>
        <Backpacker id='Backpacker' bp={backpackerExp}></Backpacker>
        <Budget id='Budget' bu={budgetExp}></Budget>
        <Family id='Family' fa={famExp}></Family>
      </div>

      {/* temporary placement of all experiences - need to be in its own page, create a new component */}
      <br/>
      
      
      

  
      {/* why are the Bootstrap spacing not working? */}
      <div className='m-6 p-6'>
        <About></About>
      </div>
      <br/>
      <div className='justify-content-evenly'>
        <h5 className='text-center' style={{fontFamily: "'DM Serif', serif"}}>Experience<span style={{color: "#FC5F5F"}}>Switzerland</span></h5>
      </div>
      
      
    </>
  );
}

export default App;
