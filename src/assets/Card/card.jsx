import "./Card.css";
import { useState } from "react";

export default function Card(props) {
  let [curent, setCurent] = useState(1);
  let [price, setPrice] = useState(props.item.rating.price);

  function minus() {
    if (curent > 1) {
      setCurent(--curent);
      setPrice((price = props.item.rating.price * curent));
    }
  }

  function plus() {
    setCurent(++curent);
    setPrice((price = props.item.rating.price * curent));
  }

  function add(item) {
    let data ={
      ...item,
      curent,
      price
    }

   
    ! props.cartData.find((e)=>{
      return e.id === item.id
    })?
    props.setCartData((prev)=>[...prev,data]):
   
    props.setCartData((prev)=>{
      prev.forEach((e)=>{
      if(e.id ===item.id){

        e.curent+= curent
        e.rating.price+= price
      }
      
   })
  return prev})




console.log(props.cartData);
  }
  return (
    <div className="item-card">
      <img src={props.item.image} alt="Sushi" width="265px" />
      <h3>{props.item.title}</h3>
      <div className="card-body">
        <p className="small curent">{props.item.count} шт.</p>
        <div className="card-detail">
          <div className="counter-wrapper">
            <div className="minus" onClick={minus}>
              <span>-</span>
            </div>
            <div className="curent">{curent}</div>
            <div className="plus" onClick={plus}>
              <span>+</span>
            </div>
          </div>
          <div className="rate">
            <p className="small">{props.item.rating.weigth}г</p>
            <p className="price">{price}₽</p>
          </div>
        </div>
      </div>
      <button className="add-btn" onClick={(e) => add(props.item)}>
        Добавить в корзину
      </button>
    </div>
  );
}
