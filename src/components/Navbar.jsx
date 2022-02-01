import React from "react";
import Logo from "../Assests/shopping-bag-svgrepo-com.svg";
import Search from "@material-ui/icons/Search";
import { PersonOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import Category from "./Category";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            Shop. <img src={Logo} alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="btn">
              <Search className="search" />
            </button>
          </div>
          <div className="user-section">
            <div className="account">
              <PersonOutlined className="userIcon" />
              <p>Sign In</p>
            </div>
            <div className="cart">
              <ShoppingCartOutlined className="cart-wheel" />
              <span className="cart-number">0</span>
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </nav>
      <Category />
    </header>
  );
};

export default Navbar;
