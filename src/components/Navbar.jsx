import React from "react";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="Apple" />
          </li>
          <li>
            <button className="link-styled">Store</button>
          </li>
          <li>
            <button className="link-styled">Mac</button>
          </li>
          <li>
            <button className="link-styled" >Iphone</button>
          </li>
          <li>
            <button className="link-styled">Ipod</button>
          </li>
          <li>
            <button className="link-styled">Watch</button>
          </li>
          <li>
            <button className="link-styled">Airpods</button>
          </li>
          <li>
            <button className="link-styled">TV & Home</button>
          </li>
          <li>
            <button className="link-styled">Entertainment</button>
          </li>
          <li>
            <button className="link-styled">Accessories</button>
          </li>

          <li>
            <button className="link-styled">Support</button>
          </li>
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
