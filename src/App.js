import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState({});
  const [itemSum, setItemSum] = useState(0);

  const sumCart = () => {
    let sum = 0;
    for (let item in cartItems) {
      sum += cartItems[item];
    }
    return sum;
  };

  useEffect(() => {
    setItemSum(sumCart);
  }, [cartItems]);

  const addToCart = (woodType, amount) => {
    if (cartItems[woodType]) {
      setCartItems({...cartItems, [woodType]: (cartItems[woodType] + amount)})
    } else {
      setCartItems({...cartItems, [woodType]: amount})
    }
  }

  return (
    <Router>
      <div className="app">
        <Nav itemSum={itemSum} />
        <Switch>
          <Route
            path="/shop"
            render={(routeProps) => <Shop {...routeProps} addToCart={addToCart}/>}
          />
          <Route
            path="/cart"
            render={(routeProps) => (
              <Cart {...routeProps} cartItems={cartItems} addToCart={addToCart}/>
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
