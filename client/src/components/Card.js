import React from "react";
import Button from "./Button";
import "./Card.css";

export default function Card({category, description, img}){

    

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={category}/>
                <div className="card-body">
                    <h4 className="card-title text-start">{category}</h4>
                    <p className="card-text text-start">{description}</p>
                    <Button></Button>
                </div>
            </div>
   
        </>
    ) 
}