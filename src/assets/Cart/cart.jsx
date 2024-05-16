import CartItem from "./CartItem/cartItem";
import "./cart.css";

export default function Cart(props) {
  return (
    <div className="cart">
      {props.cartData.map((e) => {
      return   <CartItem key={e.id} item={e} /> 
        
      })}
    </div>
  );
}
