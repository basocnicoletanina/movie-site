import React from "react";
import "./Header.css";
import { API_KEY } from "../Constants.js";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={props.imageSource} alt="" className="logo" />
      </div>

      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="lists-item" key={item.link}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
