import "../styles/Item.css";

export default function Item(props) {
  const { woodType, price, picture } = props;
  return (
    <div className="item">
      <img src={picture} className="image"></img>
      <div className="item-info">
        <p>{woodType}</p>
        <p>{`$${price}`}</p>
        <form>
          <div id="input-container">
            <input type="number" min="1"></input>
          </div>
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}
