import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Header/header";
import Slider from "./assets/Section/slider";
import Main from "./assets/Main/main";
import Nav from "./assets/Nav/nav";




function App(props) {
  let [cartData, setCartData] = useState([]);

  return (
    <div className="App">
      <Nav cartData={cartData} setCartData={setCartData} />
      <Header />
      <Slider sliderDb={props.sliderDb} />
      <Main data={props.data} cartData={cartData} setCartData={setCartData} />
    </div>
  );
}

export default App;
