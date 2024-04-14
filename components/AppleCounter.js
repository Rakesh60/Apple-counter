import React from "react";
import "./AppleCounter.css";
import Leftarrow from "../assets/images/left-arrow.png";
import Rightarrow from "../assets/images/right-arrow.png";
import Button from "./Button";
import AppleBasket from "./AppleBasket";

import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

function AppleCounter() {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
    }
    root.render(<AppleCounter />);

    console.log(`Now Left is ${leftAppleCount} & Right is ${rightAppleCount}`);
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      leftAppleCount--;
      rightAppleCount++;
    }
    root.render(<AppleCounter />);

    console.log(`Now Left is ${leftAppleCount} & Right is ${rightAppleCount}`);
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName={"Basket-1"} />
        <Button
          imageUrl={Leftarrow}
          btnName={"leftArrow"}
          ButtonClick={leftClickHandler}
        ></Button>
        <Button
          imageUrl={Rightarrow}
          btnName={"rightArrow"}
          ButtonClick={rightClickHandler}
        ></Button>
        <AppleBasket appleCount={rightAppleCount} basketName={"Basket-2"} />
      </section>
      <p style={{ textAlign: "center", marginTop: "23px" }}>
        <button>Re-Render</button>
      </p>
    </>
  );
}

export default AppleCounter;
