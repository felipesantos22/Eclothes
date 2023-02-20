import React from 'react'
import '../css/Header.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from '../pages/About';
import Cart from '../pages/Cart';
import Home from '../pages/Home';


const Header = () => {
  return (

    <div>
      <nav className='nav'>
        <ul className='list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Carrinho</Link></li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  )
}

export default Header;
