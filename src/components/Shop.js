import "../styles/Shop.css";
import Item from "./Item";
import itemData from "../assets/data/itemData.js";

export default function Shop(props) {
  return (
    <div className="shop">
      <div className="items">
        {itemData.map((woodType) => (
          <Item
            woodType={woodType.name}
            price={woodType.price}
            picture={woodType.picture}
          />
        ))}
      </div>
    </div>
  );
}
