import "../styles/Shop.css";
import Item from "./ShopItem";
import itemData from "../assets/data/itemData.js";

export default function Shop(props) {
  const { addToCart } = props;

  return (
    <div className="shop">
      <div className="items">
        {Object.keys(itemData).map((woodType) => (
          <Item
            woodType={`${woodType}`}
            price={itemData[woodType].price}
            picture={itemData[woodType].picture}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
