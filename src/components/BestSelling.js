import React, { useContext } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function BestSelling() {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <h2>Best Selling Products</h2>
          <ArrowBackIosOutlined className="sliderArrow left" />
          <div className="Products-container">
            {product.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.productName}
                  price={item.price}
                />
              );
            })}
          </div>
          <ArrowForwardIosOutlined className="sliderArrow right" />
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
