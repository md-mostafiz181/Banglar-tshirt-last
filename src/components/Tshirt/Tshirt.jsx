import React from 'react';
import "./Tshirt.css"

const Tshirt = ({tshirt,handleAddToCart}) => {

    const {name,id,picture,price}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={()=>handleAddToCart(tshirt._id)}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;