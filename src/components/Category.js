import { KeyboardArrowDown } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Category = ({ brands }) => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const filterItems = (category) => {
    const newItems = product.filter((item) => item.brand === "DELL");

    setProduct(newItems);
  };

  return (
    <div className="categories-link">
      <div className="container">
        <ul>
          <li>
            Laptop by brands <KeyboardArrowDown />
            <div className="brand-container">
              <ul className="laptops-by-brand">
                {brands.map((brand, index) => {
                  return (
                    <li key={index}>
                      <a href="#">
                        <Link to="/product" state={{ brand: brand }}>
                          {brand}
                        </Link>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li>
            Electronics <KeyboardArrowDown />
            <div className="electronics-container">
              <ul className="electronics">
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Mouse</a>
                </li>
                <li>
                  <a href="#">Keyboard</a>
                </li>
                <li>
                  <a href="#">Webcam</a>
                </li>
              </ul>
            </div>
          </li>
          <li>Desktops</li>
          <li>Gaming Laptops</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
