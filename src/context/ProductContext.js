import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      id: 1,
      productName: "Acer Nitro 5 AN517-54-79L1 Gaming Laptop",
      price: "1,119.00",
    },
    {
      id: 2,
      productName: "MSI GF63 Thin Laptop",
      price: "959.00",
    },
    {
      id: 3,
      productName: "ASUS ROG Zephyrus S Ultra Slim",
      price: "2,219.00",
    },
    {
      id: 4,
      productName: "ALIENWARE AREA-51M",
      price: "4,523.00",
    },
    {
      id: 5,
      productName: "Acer Swift 7 ",
      price: "1,058",
    },
    {
      id: 6,
      productName: "Acer Nitro 5 ",
      price: "789.00",
    },
    {
      id: 7,
      productName: "HP ZBook 15u G5 ",
      price: "1,499.00",
    },
  ]);

  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider
      value={{ products: [product, setProduct], carts: [cart, setCart] }}
    >
      {children}
    </ProductContext.Provider>
  );
};
