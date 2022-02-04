import React, { createContext, useState } from "react";
import data from "../Data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(data);

  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider
      value={{ products: [product, setProduct], carts: [cart, setCart] }}
    >
      {children}
    </ProductContext.Provider>
  );
};
