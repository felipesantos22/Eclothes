import React, { useContext } from 'react'
import '../css/Header.css'
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from '../pages/About';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import { FaOpencart } from 'react-icons/fa'
import { FaCashRegister } from 'react-icons/fa';
import { AuthContext } from '../Context/CardContext';


const Header = () => {
  const { totalValue } = useContext(AuthContext);
  return (
    <div>
      <nav className='nav'>
        <span className='cash'><FaCashRegister /> R$ {totalValue}</span>
        <ul className='list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart"><FaOpencart /></Link></li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>

  )
}

export default Header;
