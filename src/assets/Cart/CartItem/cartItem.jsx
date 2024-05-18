import { useState } from "react";
import "./cartitem.css";

export default function CartItem(props) {

  const remove = function (a) {
     props.setCartData(
      props.cartData.filter((e) => {
        return e.id !== a;
      })
      
    );
    console.log(props.item);
  };
  return (
    <div className="cartItem">
      <img src={props.item.image} width="100px" />
      <div className="cartAbout">
        <h4>{props.item.title}</h4>
        <p>{props.item.curent}</p>
        <p>{props.item.price}</p>
        <button onClick={(e) => remove(props.item.id)}>X</button>
      </div>
    </div>
  );
}
