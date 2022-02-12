import React, { useContext } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

function BestSelling() {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { items } = useContext(ProductContext);
  const [item, setItem] = items;

  const filterItems = () => {
    const newItems = product.filter((item) => item.sale === true);

    setItem(newItems);
  };
  const breakPoints = [
    { width: 325, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="header-showcase">
            <h2>Best Selling Product</h2>
            <Link
              to="/product"
              style={{ textDecoration: "none" }}
              state={{ brand: "Most Selling" }}
              onClick={filterItems}
            >
              <p>
                view all <ArrowForwardIosOutlined className="forward" />
              </p>
            </Link>
          </div>

          <div className="Products-container">
            <Carousel breakPoints={breakPoints}>
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
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
