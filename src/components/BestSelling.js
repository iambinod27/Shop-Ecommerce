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
          <div className="header-showcase">
            <h2>Best Selling Product</h2>
            <p>
              view all <ArrowForwardIosOutlined className="forward" />
            </p>
          </div>
          <ArrowBackIosOutlined className="sliderArrow left" />
          <div className="Products-container">
            {product.map((item) => {
              if (item.sale) {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.productName}
                    price={item.price}
                    img={item.image}
                    brandName={item.brandName}
                    quantity={item.quantity}
                    category={item.category}
                    shortDesc={item.shortDesc}
                  />
                );
              }
            })}
          </div>
          <ArrowForwardIosOutlined className="sliderArrow right" />
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
