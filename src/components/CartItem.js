import { useEffect, useState } from 'react';
import "../styles/CartItem.scss";

export default function Item(props) {
  const { woodType, price, picture, initialAmount, modifyCart } = props;
  const [ amount, setAmount ] = useState(initialAmount);

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  useEffect(() => {
    modifyCart( woodType, parseInt(amount));
  },[amount])

  return (
    <div className="item">
      <img src={picture} className="image"></img>
      <div className="item-info">
        <p>{woodType}</p>
        <p>{`$${price}/BF`}</p>
        <form>
          <div id="input-container">
            <input type="number" min="0" value={amount} onChange={handleChange}></input>
          </div>
        </form>
      </div>
    </div>
  );
}
