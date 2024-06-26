import { useState } from "react";
import "./nav.css";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Cart from "../Cart/cart";

export default function Nav(props) {
  const [boolCart, setBoolCart] = useState(false);

  return (
    <div className="nav">
      <p>Menu</p>
      <div className="cartIcon" onClick={()=>setBoolCart (!boolCart) }>
        <HiMiniShoppingCart size="25px" color="blue" />
      </div>
      <img className="avatar" src="./images/logo/images (1).png" alt="Sign" />
      {boolCart && <Cart boolCart={boolCart} setBoolCart={setBoolCart} cartData = {props.cartData} setCartData={props.setCartData} />}
    </div>
  );
}
