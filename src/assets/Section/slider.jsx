import { useState } from "react";
import './slider.css'

{
  /* value === text /false? */
}
{
  /*  on input event focus/blur(regexp control) */
}

export default function Slider(props) {
  let [image, setImage] = useState(0);

  const toLeft = function(){
    if(image === 0){
        setImage(props.sliderDb.length -1)
    }else{
        setImage(image -1)
    }
  }
  const toRight = function(){
    if(image === props.sliderDb.length -1){
        setImage(0)
    }else{
        setImage(image+1)
    }
  }
  return (
    <div className="slider">
      <img src={props.sliderDb[image]} alt="SUSHI KATANA" />
      <button className="left-button" onClick={toLeft} >
        <img src="./images/slider-images/left-icon.webp" alt="" />
      </button>
      <button className="right-button" onClick={toRight}>
        <img src="./images/slider-images/right-icon.webp" alt="" />
      </button>
    </div>
  );
}
