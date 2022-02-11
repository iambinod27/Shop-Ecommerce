import React, { useContext, useState } from "react";
import Logo from "../Assests/logo/shopping-bag-svgrepo-com.svg";
import Search from "@material-ui/icons/Search";
import { PersonOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import Category from "./Category";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import data from "../Data";

const brand = [
  ...new Set(
    data.map((item) => {
      if (item.category === "Laptops") {
        const branded = item.brandName;
        return branded;
      }
    })
  ),
];

const Navbar = () => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { items } = useContext(ProductContext);
  const [item, setItem] = items;

  const filterItems = (brand) => {
    const newItems = product.filter((item) => item.brandName === brand);

    setItem(newItems);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              Shop. <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="btn">
              <Search className="search" />
            </button>
          </div>
          <div className="user-section">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="account">
                <PersonOutlined className="userIcon" />
                Sign In
              </div>
            </Link>

            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="cart">
                <ShoppingCartOutlined className="cart-wheel" />
                <span className="cart-number">{cart.length}</span>
                <p>My Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Category brands={brand} filterItems={filterItems} items={item} />
    </header>
  );
};

export default Navbar;
