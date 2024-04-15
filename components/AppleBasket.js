import React from "react";

function AppleBasket({ appleCount, basketName }) {
  return (
    <div className="basket">
      <h1>
        <span>{appleCount}</span>Apples
      </h1>
      <p>
        {basketName} {appleCount >= 10 && "full"}
      </p>
    </div>
  );
}

export default AppleBasket;
