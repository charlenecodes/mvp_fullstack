import React from "react";
import "./Card.css";

export default function Card({category, description, img, setActive}){

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={category}/>
                <div className="card-body">
                    <h4 className="card-title text-start">{category}</h4>
                    <p className="card-text text-start">{description}</p>
                    <a href="#categories"><button onClick={() => setActive(category)} className="my-2 mb-4">SHOW MORE</button></a>
                </div>
            </div>
   
        </>
    ) 
}