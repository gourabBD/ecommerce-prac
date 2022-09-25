
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CosmeticUi from '../CosmeticUI/CosmeticUi';

const Cosmetics = () => {
    const [cosmetics,setCosmetics]=useState([])
    useEffect(()=>{
        fetch('generated.json')
        .then(res=> res.json())
        .then(data=>setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome To Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic=>{
                    return(
                        <div>
                    <CosmeticUi
                     key={cosmetic.id} 
                     cosmetic={cosmetic}>

                     </CosmeticUi>
                    
                    </div>
                    )
                })
                
            }
        </div>
    );
};

export default Cosmetics;