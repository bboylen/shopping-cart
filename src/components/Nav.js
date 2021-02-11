import '../styles/Nav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Cool Store Name</h1>
      </Link>
      <Link to="/shop">
        <h1>Shop</h1>
      </Link>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
        <span className="cart-sum">(0)</span>
      </Link>
      
    </div>
  )
}