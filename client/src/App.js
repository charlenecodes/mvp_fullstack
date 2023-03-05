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
import Contact from './components/Contact';


function App() {
  // * FOR THE CART
  let [cart, setCart] = useState([])

  const showCart = () => {
    console.log("when clicked show cart page")
  }

  // * FOR SHOWING EXPERIENCES
  let [experiences, setExperiences] = useState([])
  let [backpackerExp, setBackpackerExp] = useState([])
  let [budgetExp, setBudgetExp] = useState([])
  let [famExp, setFamExp] = useState([])

  // * FOR THE SHOW MORE BUTTONS IN THE CARD
  let [active, setActive] = useState("showAll")

  // * FETCHING FROM MYSQL DATABASE
  const fetchExperiences = async () => {
    try {
      // since we are grabbing this from our database and we don't have any other APIs, we only have to specify what comes after our port
      let results = await fetch(`/experiences`)
      let allExperiences = await results.json();
      // console.log(allExperiences.data)
      setExperiences(allExperiences.data)
    } catch(err) {
      console.log(err)
    }
  };

  // TODO: there is probably a way to refactor this so we do not have to call them separately
  const fetchBackpacker = async () => {
    try {
      let results = await fetch(`/experiences/1`)
      let allBackpacker = await results.json();
      // console.log(allBackpacker.data)
      setBackpackerExp(allBackpacker.data)
    } catch(err) {
      console.log(err)
    }
  };
  
  const fetchBudget = async () => {
    try {
      let results = await fetch(`/experiences/2`)
      let allBudget = await results.json();
      // console.log(allBudget.data)
      setBudgetExp(allBudget.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchFam = async () => {
    try {
      let results = await fetch(`/experiences/3`)
      let allFam = await results.json();
      // console.log(allFam.data)
      setFamExp(allFam.data)
    } catch(err) {
      console.log(err)
    }
  };

  // useEffect loads at the beginning
  useEffect(() => {
    fetchExperiences();
    fetchBackpacker();
    fetchBudget();
    fetchFam();
    
  }, []);


  useEffect(() => {
    console.log(cart)
    console.log(cart.length)
  }, [cart])
  

  // * this function will be for the add to cart buttons; 
  // * I passed this function onto the Experiences, Backpacker, Budget, and Family components and it works together with the map function to return the info from the clickedExperience so we can display it to the cart
  const addToCart = (clickedExperience) => {
    // console.log(clickedExperience)
    setCart([...cart, clickedExperience])
  }



  // TODO/Feature extension refactor these code so they can be passed down to the cards in a simpler way (maybe as an array)

  const backpacker = "On a day trip to Switzerland or penny-pinching to make the trip last longer?";
  const budget = "Would you like to experience the true Switzerland, but still want to stay within budget?"; 
  const family = "Traveling as a family? Whether you are traveling with young kids or adults we have it all!";
  
  const backpackerImg = "https://images.pexels.com/photos/844528/pexels-photo-844528.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const budgetImg = "https://images.pexels.com/photos/7862091/pexels-photo-7862091.jpeg?auto=compress&cs=tinysrgb&w=1600"
  const familyImg ="https://images.pexels.com/photos/5637770/pexels-photo-5637770.jpeg?auto=compress&cs=tinysrgb&w=1600" 

  return (
    <>

      {
        (cart.length > 0) && 
        <div className=''>
          <CartButton cart={cart} addToCart={addToCart} showCart={showCart}></CartButton>
        </div>
      }
      

      <h4 className='text-center mt-2'>Experience<span style={{color: "#FC5F5F"}}>Switzerland</span></h4>

      <div id="top">
        <Hero setActive={setActive}></Hero>
      </div>
      
      <div>
        <Intro></Intro>
      </div>

      
      
      <div className='cards'>
        <div className='row offset-1 offset-sm-3 offset-md-1 justify-content-evenly'>
          <div className='mt-5 col'>
            {/* pass the setActive to each card so the buttons can use them */}
            <Card setActive={setActive} category="Backpacker" description={backpacker} img={backpackerImg}>
            </Card>
          </div>
          <div className='mt-5 col'>
            <Card setActive={setActive} category="Budget" description={budget} img={budgetImg}>
            </Card>
          </div>
          <div className='mt-5 col'>
            <Card setActive={setActive} category="Family" description={family} img={familyImg}>
            </Card>
          </div>
        </div>
      </div>

      {/* temporary placement of all experiences - need to be in its own page, create a new component */}
      <div id='experiences' className='mt-5'>
        <View></View>
        {/* need to set up react router to view this as a separate page */}
          <div id="categories">
            { active === "showAll" && <Experiences active="active" addToCart={addToCart} experiences={experiences}></Experiences>}
            { active === "Backpacker" && <Backpacker id='Backpacker' addToCart={addToCart} bp={backpackerExp}></Backpacker> }
            { active === "Budget" && <Budget id='Budget' addToCart={addToCart} bu={budgetExp}></Budget> }
            { active === "Family" && <Family id='Family' addToCart={addToCart} fa={famExp}></Family> }
          </div>
        
      </div>

      <div className="text-center m-4">
        { (active !== "showAll") && <a href='#categories'><button onClick={() => setActive("showAll")}>Show all experiences</button></a> } 
      </div>

      <div className='text-center m-6'>
        <a href="#intro" style={{color: "teal", fontSize: ".8rem"}}>Back to categories</a>
      </div >

      <div className='mt-4'>
        <Contact></Contact>
      </div>
      <br/>
      {/* why are the Bootstrap spacing not working? */}
      <div className='m-6 p-6'>
        <About></About>
      </div>
      <br/>

      <div className='text-center m-6'>
        <a href="#top" style={{color: "teal", fontSize: ".8rem"}}>Back to top</a>
      </div >

      <br/>
      <div className='justify-content-evenly'>
        <h5 className='text-center' style={{fontFamily: "'DM Serif', serif"}}>Experience<span style={{color: "#FC5F5F"}}>Switzerland</span></h5>
      </div>
      
      
    </>
  );
}

export default App;
