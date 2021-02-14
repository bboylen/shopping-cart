import { useState } from 'react';
import "../styles/CartItem.scss";

export default function Item(props) {
  const { woodType, price, picture, addToCart } = props;
  const [ amount, setAmount ] = useState(0);

  const handleForm = (e) => {
    e.preventDefault();
    addToCart( woodType, parseInt(amount));
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="item">
      <img src={picture} className="image"></img>
      <div className="item-info">
        <p>{woodType}</p>
        <p>{`$${price}/BF`}</p>
        <form onSubmit={handleForm}>
          <div id="input-container">
            <input type="number" min="0" value={amount} onChange={handleChange}></input>
          </div>
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}
