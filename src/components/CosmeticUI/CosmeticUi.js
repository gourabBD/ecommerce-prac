import React from 'react';
import { addToDb, removeFromDb } from '../fakeDb';
import './cosmetic.css'
const CosmeticUi = (props) => {
    const {name,id,price}=props.cosmetic;

    const addToCart=(id)=>{
       addToDb(id)
    }

    const removeFromCart=(id)=>{
        removeFromDb(id)
    }
    
    return (
        <div className='product'>
            <h1>Product name:{name}</h1>
                    <p>Product Cost:{price}</p>
                    <p>Product ID:{id}</p>
                    <button onClick={()=>addToCart(id)}>Add to cart</button>
                    <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default CosmeticUi;