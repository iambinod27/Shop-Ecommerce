import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-container">
          <h2>Featured Products</h2>
          <div className="Products-container">
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
