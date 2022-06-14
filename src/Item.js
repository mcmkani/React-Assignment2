import React from 'react';

function Item(prop){
    let productRating = parseInt(prop.rating);
    console.log(productRating);
    return (
    <div className="col mb-5">
    <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right:'0.5rem'}}>{prop.availableforsale}</div>
        <img className="card-img-top" src={prop.image} alt={prop.name}/>
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{prop.category}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">                        
                     {(() => {                
                        const options = [];
                        if(productRating !== 0){                        
                            for (let i = 0; i<productRating; i++) {                           
                            options.push(<div className="bi-star-fill"></div>);
                            }  
                            return options;
                        } 
                    })()}                                         
                    </div>
                    
                <span className="text-muted text-decoration-line-through">{prop.oldprice}</span>
                {prop.price}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><button data-id={prop.id} className="btn btn-outline-dark mt-auto" 
            onClick={ prop.count }>{prop.action}</button></div>
        </div>
    </div>
    </div>
    );
    }
    
    export default Item;
    
    