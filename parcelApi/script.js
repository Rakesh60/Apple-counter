import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Card(cardDetails) {
  const { id, title, description, price, thumbnail } = cardDetails;
  return (
    <div className="card" key={id}>
      <img src={thumbnail} className="thumbnail" alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <b>{price}</b> 
        </p>
      </div>
    </div>
  );
}

// const container = [Card(2), Card(3), Card(4), Card(5)];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((products) => {
          return Card({
            description: products.description,
            id: products.id,
            title: products.title,
            price: products.price,
            thumbnail: products.thumbnail,
          });
        })}
      </div>
    );
  });

if (module.hot) {
  module.hot.accept();
}
