import React from "react";

function Button({ imageUrl, btnName, ButtonClick }) {
  return (
    <>
      <button title={btnName} onClick={ButtonClick}>
        <img src={imageUrl} alt="arrow" />
      </button>
    </>
  );
}

export default Button;
