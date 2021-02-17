import '../styles/Home.css';
import { Link } from "react-router-dom";


export default function Home(props) {

  return (
    <div className="home">
      <h1>Welcome to the Wood Shoppe! See what we have on offering &nbsp;</h1>
      <Link to="/shop">
        <h1 id="shop-link">{`    HERE`}</h1>
      </Link>
    </div>
  )
}