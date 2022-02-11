import { KeyboardArrowDown } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Category = ({
  brands,
  filterItems,
  aCategory,
  filterAcc,
  filterDesktop,
  filterGamingLaptops,
}) => {
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
                      <Link
                        to="/product"
                        state={{ brand: brand }}
                        onClick={() => filterItems(brand)}
                      >
                        {brand}
                      </Link>
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
                {aCategory.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to="/product"
                        state={{ brand: item }}
                        onClick={() => filterAcc(item)}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <Link
            to="/product"
            style={{ textDecoration: "none" }}
            state={{ brand: "Desktops" }}
            onClick={filterDesktop}
          >
            <li>Desktops </li>
          </Link>
          <Link
            to="/product"
            style={{ textDecoration: "none" }}
            state={{ brand: "Gaming Laptops" }}
            onClick={filterGamingLaptops}
          >
            <li>Gaming Laptops</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Category;
