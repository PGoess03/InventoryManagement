import React, { useState } from "react";
import "./Card.css";
import Item from "./Item";

const list = [
  {
    id: 1,
    brand: "Bacardi",
    amount: 0,
    alcoholic: true,
  },
  {
    id: 2,
    brand: "Captain Morgen",
    amount: 0,
    alcoholic: true,
  },
  {
    id: 3,
    brand: "Cola",
    amount: 0,
    alcoholic: false,
  },
];

const Card = () => {
  return (
    <ul className="cards">
      {list.map((item) => {
        return <Item brand={item.brand} amount={item.amount} />;
      })}
    </ul>
  );
};

export default Card;
