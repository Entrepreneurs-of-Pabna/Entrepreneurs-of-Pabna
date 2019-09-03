import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
    <header>
      <div className="left">
      <Link className="brand" to="/">Entrepreneurs of Pabna</Link>
      </div>
      <nav className="right">
        <NavLink activeClassName="nav-active" to= "/gallery" >Gallery</NavLink>
        <NavLink activeClassName="nav-active" to= "/about" >About</NavLink>
      </nav>
    </header>
      <br/>
    </React.Fragment>
  )
}
export default Header