import "../Main/main.css";
import Card from "../Card/card";

function Main({ datas, cartData, setCartData }) {
  return (
    <div className="all-cards">
      {datas.map((e) => {
        return (
          <Card
            key={e.id}
            item={e}
            cartData={cartData}
            setCartData={setCartData}
          />
        );
      })}
    </div>
  );
}

export default Main;
