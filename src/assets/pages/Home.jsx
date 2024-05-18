import Header from "../Header/header";
import Main from "../Main/main";
import Slider from "../Section/slider";

const Home = (props) => {
  return (
    <div className="Home">
      <Header />
      <Slider sliderDb={props.sliderDb} />
      <Main
        datas={props.datas}
        cartData={props.cartData}
        setCartData={props.setCartData}
      />
    </div>
  );
};

export default Home;
