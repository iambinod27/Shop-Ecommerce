import {
  ShoppingCartOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ name, price, id }) => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const addCart = () => {
    setCart([{ productName: name, price: price }, ...cart]);
    console.log(id);
    console.log(cart);
  };

  useEffect(() => {
    return addCart;
  }, []);

  return (
    <div className="products">
      <img
        src={require("../Assests/msi-gp66-leopard-10ue-price-nepal-i7-10870h-rtx-3060.jpg")}
        alt="#"
      />
      <h1>${price}</h1>
      <h3>{name}</h3>
      <ul className="reviews">
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarBorderOutlined className="unstared" />
        </li>
        <li>
          <StarBorderOutlined className="unstared" />
        </li>
      </ul>
      <button className="btn" onClick={addCart}>
        <ShoppingCartOutlined className="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
