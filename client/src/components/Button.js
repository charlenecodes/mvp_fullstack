import React from "react"
import './Button.css';

export default function Button({category, setActive}){
    return(
        <>
            {/* /make sure that when the button is clicked that we will have the proper page load */}
            <button onClick={() => setActive(category)} className="my-2 mb-4">SHOW MORE</button>
        </>
    ) 
}