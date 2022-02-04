import React, { useContext } from "react";
import Logo from "../Assests/logo/shopping-bag-svgrepo-com.svg";
import Search from "@material-ui/icons/Search";
import { PersonOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import Category from "./Category";

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

  console.log(brand);

  const filterItems = (category) => {
    if (category === "All") {
      setProduct(product);
    }

    const newItems = product.filter((item) => item.category === "Laptops");

    setProduct(newItems);
  };

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
              <span className="cart-number">{cart.length}</span>
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </nav>
      <Category brands={brand} filterItems={filterItems} />
    </header>
  );
};

export default Navbar;
