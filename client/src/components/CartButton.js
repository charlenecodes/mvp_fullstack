import React from "react"

export default function CartButton({cartCounter}){
    return(
        <>
            {/* Bootstrap makes the button on the right side and with slide margins so it is not touching the edges */}
            <div className="d-flex flex-row-reverse">
                <button className="m-1">Cart {cartCounter}</button>
            </div>
             
        </>
    ) 
}