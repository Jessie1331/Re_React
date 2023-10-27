import "./product.css";
import QuantityPicker from "./quantityPicker";

import { useEffect, useState } from "react";


function Product(props){
    const[quantity, qty]= useState(1);

    useEffect(function(){
        console.log("hello i am a product");
    
    },[]);

   function onQuantityChange(qty){
    console.log("new quantity" + qty)

   }
   function getTotal(){
    const getTotal = props.data.Price * quantity;
    return getTotal.toFixed(2);

   }
    return(
         <div className="product">
            <img src={"./107 images/" + props.data.image} alt=""/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price:${props.data.Price}</label>
                <label>Total:${getTotal()}</label>
            </div>
            <QuantityPicker onChange={onQuantityChange}/>
         </div>
    );
}

export default Product;