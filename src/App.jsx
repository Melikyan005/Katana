import { useState } from "react";
import "./App.css";
import Header from "./assets/Header/header";
import Slider from "./assets/Section/slider";
import Main from "./assets/Main/main";
import Nav from "./assets/Nav/nav";
import Home from "./assets/pages/Home";
import SignIn from "./assets/pages/SignIn";
import { Routes, Route } from "react-router-dom";

function App(props) {
  let [cartData, setCartData] = useState([]);

  return (
    <div className="App">
      <Nav cartData={cartData} setCartData={setCartData} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sliderDb={props.sliderDb}
              datas={props.datas}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
