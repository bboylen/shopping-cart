import '../styles/Nav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props) {
  const { itemSum } = props;
  
  return (
    <div className="nav">
      <Link to="/">
        <h1 id="title">Wood Shoppe</h1>
      </Link>
      <Link to="/shop">
        <h1 id="shop">Shop</h1>
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
        <span className="cart-sum">({itemSum})</span>
      </Link>
    </div>
  )
}