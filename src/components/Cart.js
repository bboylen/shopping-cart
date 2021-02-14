import '../styles/Cart.css';
import itemData from "../assets/data/itemData.js";
import Item from "./CartItem";


export default function Cart(props) {
  const { addToCart } = props;
  return (
    <div className="cart">
      <div className="sum">
        
      </div>
      <div className="items">
        {itemData.map((woodType) => (
          <Item
            woodType={woodType.name}
            price={woodType.price}
            picture={woodType.picture}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}