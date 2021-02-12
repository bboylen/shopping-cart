import '../styles/Shop.css';
import Item from './Item';
import itemData from '../assets/data/itemData.json';

export default function Shop(props) {
  return (
    <div className="shop">
      <div className="items">
        {Object.keys(itemData).map((woodType) => (
          <Item woodType={woodType} price={itemData[woodType].price}/>
        ))}
      </div>
    </div>
  )
}