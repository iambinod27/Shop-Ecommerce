import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";

const Category = () => {
  return (
    <div className="categories-link">
      <div className="container">
        <ul>
          <li>
            Laptop by brands <KeyboardArrowDown />
          </li>
          <li>
            Electronics <KeyboardArrowDown />
          </li>
          <li>Desktops</li>
          <li>Gaming Laptops</li>
          <li>Custom Build</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
