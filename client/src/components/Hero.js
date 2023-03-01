import React from "react"
import './Hero.css';

export default function Hero(){
    return(
        <>
            <div className="row">
                <div id="hero">
                    <div className="container">
                        <div className="info">
                            <h4>Planning a trip to Switzerland?</h4>
                            <h1 className="mt-2">Experience Switzerland on a budget</h1>
                            <a href="#experiences">
                                <button className="mt-2">
                                    Explore 
                                </button>
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                
                
               
            </div>
        </>
    ) 
}
