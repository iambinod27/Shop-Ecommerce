import React, { createContext, useEffect, useState } from "react";
import data from "../Data";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(data);

  const [cart, setCart] = useState(cartFromLocalStorage);

  const [item, setItem] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products: [product, setProduct],
        carts: [cart, setCart],
        items: [item, setItem],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
