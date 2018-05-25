import { NavLink } from "react-router-dom";
import React from 'react';
import '../App.css'
const activeClass = {
  color: '#18a0a3'
}
const Header = () => (
  <div className="Header">
    <div className="Header__title"><NavLink to="/">ChuotNhat</NavLink></div>
    <ul className="Header__menu">
      <li>
        <NavLink to="/" exact activeStyle={activeClass}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/login" activeStyle={activeClass}>Login</NavLink>
      </li>
      <li>
        <NavLink exact to="/register" activeStyle={activeClass}>Register</NavLink>
      </li>
    </ul>
    <ul className="Header__menu">
      <li>
        <NavLink to="/" exact activeStyle={activeClass}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/newarticle" activeStyle={activeClass}>New Article</NavLink>
      </li>
      <li>
        <NavLink exact to="/setting" activeStyle={activeClass}>Setting</NavLink>
      </li>
      <li>
        <NavLink exact to="/ten" activeStyle={activeClass}>Ten</NavLink>
      </li>
    </ul>
  </div>
);
export default Header;