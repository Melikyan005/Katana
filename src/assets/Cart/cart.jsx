import CartItem from "./CartItem/cartItem";
import "./cart.css";

export default function Cart(props) {
  return (
    <div className="cart">
      {props.cartData[0] ? (
        props.cartData.map((e) => {
          return (
            <CartItem
              key={e.id}
              item={e}
              cartData={props.cartData}
              setCartData={props.setCartData}
            />
          );
        })
      ) : (
        <div className="empty">empty</div>
      )}

      <button
        className="cartClose"
        onClick={(e) => {
          console.log(props.cartData);
          props.setBoolCart(!props.boolCart)
        }}
      >
        X
      </button>
    </div>
  );
}
