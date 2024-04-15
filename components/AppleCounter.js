import React, { useState } from "react";
import "./AppleCounter.css";
import Leftarrow from "../assets/images/left-arrow.png";
import Rightarrow from "../assets/images/right-arrow.png";
import Button from "./Button";
import AppleBasket from "./AppleBasket";







function AppleCounter({root}) {
  const totalAppleCount = 10;

  const [rightAppleCount,setRightappleCount]=useState(0)
  const [leftAppleCount,setLeftappleCount]=useState(totalAppleCount - rightAppleCount)
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightappleCount(rightAppleCount-1)
      setLeftappleCount(leftAppleCount+1)
    }
    root.render(<AppleCounter root={root} />);
    console.log(`Now Left is ${leftAppleCount} & Right is ${rightAppleCount}`);
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightappleCount(rightAppleCount+1)
      setLeftappleCount( leftAppleCount-1)
    }

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
   
    </>
  );
}

export default AppleCounter;
