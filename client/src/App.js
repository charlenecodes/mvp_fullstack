import React, { useEffect, useState } from 'react';
import './App.css';
import CartButton from './components/CartButton';
import Card from './components/Card';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import View from './components/View';
// import Experiences from './components/Experiences';

function showExperiences() {

}

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
      let allExperiences = await results.json();
      console.log(experiences.data)
      setExperiences(allExperiences.data)
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

      <div id='experiences' className='mt-5'>
        <View></View>
      </div>

      {/* temporary placement of all experiences - need to be in its own page, create a new component */}
      <br/>
      
      <div className='justify-content-evenly'>
        {experiences.map(experience => (
          <div className="d-flex justify-content-center mb-4" key={experience.id}>
            <br/>
              <div className='container-experiences border rounded' style={{maxWidth: "70vw"}}>
                {/* first row - title */}
                <div className='row mx-auto pt-4'>
                  <h4 className='col text-center'>{experience.experience}</h4>
                </div>
                {/* second row - img/info/price */}
                <div className='row p-3 pt-1'>
                    <img className="col" src={experience.img} style={{width: "400px", height: "400px", objectFit: "cover"}}></img>
                    <p className='col text-start mt-2'>{experience.info}
                    <p>{/* just for spacing */}</p>
                    <p className='d-flex justify-content-end'><strong>Price: CHF {experience.amount}.00</strong></p>
                    </p>
                </div>
                <div className='row pb-3 d-flex justify-content-center'>
                  <button className='col-2 col-sm-4 col-m-2 col-lg-2'>Add to cart</button>
                </div>

              </div>
          </div>
        ))}
      </div>
      

  
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
