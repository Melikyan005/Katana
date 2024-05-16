import { useState } from "react";
import "./cartitem.css"

export default function CartItem(props) {

  const remove =function(a){
    props.setCartData((prev)=>{
     props.cartData.filter((e)=>{
      
      return e.id!==a.id
     })
  })
  }
  return (
    <div className="cartItem">
      <img src={props.item.image} width='100px'/>
      <div className="cartAbout">
      <h4>{props.item.title}</h4>
      <p>{props.item.curent}</p>
      <p>{props.item.rating.price}</p>
      <button onClick={(e)=>remove(e)}>X</button>

      </div>
      
    </div>
  );
}
