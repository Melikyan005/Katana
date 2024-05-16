import CartItem from "./CartItem/cartItem";
import "./cart.css";

export default function Cart(props) {
  return (
    <div className="cart">
     {props.cartData&&props.cartData.map((e)=>{
      return<CartItem key={e.id} item={e} cartData = {props.cartData} setCartData={props.setCartData}/>
     })}
      
     
    
      <button className="cartClose" onClick={()=>props.setBoolCart (!props.boolCart)} >X</button>
    </div>
  );
}
