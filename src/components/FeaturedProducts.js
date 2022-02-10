import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

const FeaturedProduct = () => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const productRef = useRef();

  const handleClick = (direction) => {
    let distance = productRef.current.getBoundingClientRect().x - 10;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      productRef.current.style.transform = `translateX(${362 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 50) {
      setSlideNumber(slideNumber + 1);
      productRef.current.style.transform = `translateX(${-362 + distance}px)`;
      setIsMoved(true);
    }
  };

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="header-showcase">
            <h2>Featured Products</h2>
            <p>
              view all <ArrowForwardIosOutlined className="forward" />
            </p>
          </div>
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="Products-container" ref={productRef}>
            {product.map((item) => {
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
            })}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
