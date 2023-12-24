import React, { useState } from "react";
import "./slider.css";
import Cart from "./Cart";

const data = [
  {
    id: 1,
    bg: "red",
  },
  {
    id: 2,
    bg: "blue",
  },
  {
    id: 3,
    bg: "yellow",
  },
  {
    id: 4,
    bg: "green",
  },
];
const Slider = () => {
  const [slider, setSlider] = useState(0);
  const handleClick = (direction) => {
    direction === "left"
      ? setSlider(slider > 0 ? slider - 1 : 3)
      : setSlider(slider < data.length - 1 ? slider + 1 : 0);
  };
  return (
    <div className="container">
      <div className="left">
        <div className="top">
          <h1 className="title">
            Our <br /> Projects
          </h1>
        </div>
        <div className="bottom">
          <div>01/20</div>
          <div className="buttons">
            <button onClick={() => handleClick("left")}>left</button>
            <button onClick={() => handleClick("right")}>right</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="slider-container">
          <div className="cart-container">
            {data.map((item) => (
              <div
                className="trans"
                style={{ transform: `translateX(-${slider * 350}px)` }}
              >
                <Cart key={item.id} bg={item.bg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
