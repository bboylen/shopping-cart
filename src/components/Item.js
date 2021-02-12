import '../styles/Item.css';
import birch from '../assets/pictures/Birch.jpg'

export default function Item (props) {
  const { woodType, price } = props;
  return (
    <div className="item">
      <img src={birch} className="image">

      </img>
      <div className="item-info">

      </div>
    </div>
  )
}