import React from "react";

export default function Budget({bu}){
    return(
        <>
             <h1 className="text-center my-4">Experiences for Budget Travelers</h1>
             <div className='justify-content-evenly'>
                {bu.map(item => (
                <div className="d-flex justify-content-center mb-4" key={item.id}>
                    <br/>
                    <div className='container-experiences border rounded' style={{maxWidth: "70vw"}}>
                        {/* first row - title */}
                        <div className='row mx-auto pt-4'>
                        <h4 className='col text-center'>{item.experience}</h4>
                        </div>
                        {/* second row - img/info/price */}
                        <div className='row p-3 pt-1'>
                            <img alt={item.experience} className="col" src={item.img} style={{width: "400px", height: "400px", objectFit: "cover"}}></img>
                            <p className='col text-start mt-2'>{item.info}
                            <p>{/* just for spacing */}</p>
                            <p className='d-flex justify-content-end'><strong>Price: CHF {item.amount}.00</strong></p>
                            </p>
                        </div>
                        <div className='row pb-3 d-flex justify-content-center'>
                        <button className='col-2 col-sm-4 col-m-2 col-lg-2'>Add to cart</button>
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </>
    ) 
}