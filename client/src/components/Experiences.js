import React, { useEffect, useState } from "react";

export default function Experiences(){
    return(
        <>
             <h1>All Experiences</h1>
             <div>
                {experiences.map(experience => (
                <div key={experience.id}>
                    <img className="text-center" style={{height: "auto", maxWidth: "100vw"}} src={experience.img}></img>
                    <h4 style={{color: "#FC5F5F"}}>{experience.experience}</h4>
                    <p>{experience.info}</p>
            </div>
        )
          
        )}
      </div>
        </>
    ) 
}