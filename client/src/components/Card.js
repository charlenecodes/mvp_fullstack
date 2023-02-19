import React from "react"

export default function Card({category, description}){
    // if (category.toLowerCase() === "backpacker") {
    //     img.src=""
    // } else if (category.toLowerCase() === "budget") {
    //     img.src=""
    // } else if (category.toLowerCase() === "family") {
    //     img.src=""
    // }

    return(
        <>
            <div className="card">
                <h4>{category}</h4>
                <p>
                    {description}
                </p>
            </div>
             
        </>
    ) 
}