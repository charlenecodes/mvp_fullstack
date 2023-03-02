import React from "react";

export default function Family({fa, addToCart}){
    return(
        <>
             <h1 className="text-center my-4">Experiences for Families</h1>
             <div className='justify-content-evenly'>
                {fa.map(family => (
                <div className="d-flex justify-content-center mb-4" key={family.experience}>
                    <br/>
                    <div className='container-experiences border rounded' style={{maxWidth: "70vw"}}>
                        {/* first row - title */}
                        <div className='row mx-auto pt-4'>
                        <h4 className='col text-center'>{family.experience}</h4>
                        </div>
                        {/* second row - img/info/price */}
                        <div className='row p-3 pt-1'>
                            <img alt={family.experience} className="col" src={family.img} style={{width: "400px", height: "400px", objectFit: "cover"}}></img>
                            <p className='col text-start mt-2'>{family.info}
                            <p>{/* just for spacing */}</p>
                            <p className='d-flex justify-content-end'><strong>Price: CHF {family.amount}.00</strong></p>
                            </p>
                        </div>
                        <div className='row pb-3 d-flex justify-content-center'>
                        <button className='col-2 col-sm-4 col-m-2 col-lg-2' onClick={() => addToCart(family)}>Add to cart</button>
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </>
    ) 
}