import React from "react";

export default function Backpacker({bp, addToCart}){
    return(
        <>
             <h1 className="text-center my-4">Experiences for Backpackers</h1>
             <div className='justify-content-evenly'>
                {bp.map(backpacker => (
                <div className="d-flex justify-content-center mb-4" key={backpacker.experience}>
                    <br/>
                    <div className='container-experiences border rounded' style={{maxWidth: "70vw"}}>
                        {/* first row - title */}
                        <div className='row mx-auto pt-4'>
                        <h4 className='col text-center'>{backpacker.experience}</h4>
                        </div>
                        {/* second row - img/info/price */}
                        <div className='row p-3 pt-1'>
                            <img alt={backpacker.experience} className="col" src={backpacker.img} style={{width: "400px", height: "400px", objectFit: "cover"}}></img>
                            <p className='col text-start mt-2'>{backpacker.info}
                            <p>{/* just for spacing */}</p>
                            <p className='d-flex justify-content-end'><strong>Price: CHF {backpacker.amount}.00</strong></p>
                            </p>
                        </div>
                        <div className='row pb-3 d-flex justify-content-evenly'>
                        <button className='col-2 col-sm-4 col-m-2 col-lg-2'>Add to cart</button>
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </>
    ) 
}