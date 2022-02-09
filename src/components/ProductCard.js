import {
  ShoppingCartOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ name, price, id, img, brandName, quantity }) => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const addCart = () => {
    setCart((prevItem) => [
      ...prevItem,
      {
        id: new Date().getMilliseconds().toString(),
        name: name,
        price: price,
        brand: brandName,
        image: img,
        quantity: quantity,
        total: price,
      },
    ]);
  };

  return (
    <div className="products">
      <img src={img} alt="#" />
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
