import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { React, useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

export default function App() {
  const [ cartItems, setCartItems ] = useState([]);
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
