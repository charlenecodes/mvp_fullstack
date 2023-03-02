import React from "react"
import './Contact.css';

export default function Contact(){
    return(
        <>
            <div className="row">
                <div id="contact">
                    <div className="container">
                        <div className="info">
                            <h4>Would you like a curated itinerary?</h4>
                            <h1 className="mt-2">Contact us</h1>
                            <a href="#intro">
                                <a href = "mailto: abc@example.com">
                                    <button className="mt-2">
                                        Email 
                                    </button>
                                </a>
                                
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                
                
               
            </div>
        </>
    ) 
}
