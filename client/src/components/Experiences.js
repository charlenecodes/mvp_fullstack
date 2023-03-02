import React from "react";

export default function Experiences({experiences, addToCart}){
    return(
        <>
             <h1 className="text-center my-4">All Experiences</h1>
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
                            <img alt={experience.experience} className="col" src={experience.img} style={{width: "400px", height: "400px", objectFit: "cover", borderRadius: "12px 50px"}}></img>
                            <p className='col text-start mt-2'>{experience.info}
                            <p className='d-flex justify-content-end'><strong>Price: CHF {experience.amount}.00</strong></p>
                            </p>
                        </div>
                        <div className='row pb-3 d-flex justify-content-center'>
                        <button className='col-2 col-sm-4 col-m-2 col-lg-2' onClick={() => addToCart(experience)}>Add to cart</button>
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </>
    ) 
}