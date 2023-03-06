import React from "react";
import { useState } from "react";
function USEBtn(){
    const[price,changePrice]=useState(0);
    const update1=()=>{
        changePrice(price+150)
    }
    const update2=()=>{
        changePrice(price-150)
    }
    return(
        <>
        <h1>{price}</h1>
        <button onClick={update1}>Add</button>
        <button onClick={update2}>Remove</button>
        
        
        </>
    )
}

export default USEBtn;
