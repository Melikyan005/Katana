import { useState } from "react";

export default function CartItem(props) {
  
  return (
    <div>
      <img src={props.item.image} width='100px'/>
      <h4>{props.item.title}</h4>
      
    </div>
  );
}
