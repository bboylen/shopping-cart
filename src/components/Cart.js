import "../styles/Cart.css";
import Item from "./CartItem";
import itemData from "../assets/data/itemData.js";
import { useEffect, useState } from "react";

export default function Cart(props) {
  const { cartItems, modifyCart } = props;
  const [ totalCost, setTotalCost ] = useState(0);

  const sumCartCost = () => {
    let sum = 0;
    for (const woodType in cartItems) {
      sum += itemData[woodType].price * cartItems[woodType];
    }
    return sum;
  };

  useEffect(() => {
    setTotalCost(sumCartCost);
  },[cartItems]);

  return (
    <div className="cart">
      <div className="sum">
        <h2>Total: ${totalCost}</h2>
        <button type="button">Order</button>
      </div>
      <div className="items">
        {Object.keys(cartItems).map((woodType) => (
          <Item
            woodType={`${woodType}`}
            price={itemData[woodType].price}
            picture={itemData[woodType].picture}
            modifyCart={modifyCart}
            initialAmount={cartItems[woodType]}
          />
        ))}
      </div>
    </div>
  );
}
