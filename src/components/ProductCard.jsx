import {
  ShoppingCartOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@material-ui/icons";
import React from "react";

const ProductCard = () => {
  return (
    <div className="products">
      <img
        src={require("../Assests/msi-gp66-leopard-10ue-price-nepal-i7-10870h-rtx-3060.jpg")}
        alt=""
      />
      <h3>MSI GP66 Leopard 10UE</h3>
      <ul className="reviews">
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarOutlined className="stared" />
        </li>
        <li>
          <StarBorderOutlined className="unstared" />
        </li>
        <li>
          <StarBorderOutlined className="unstared" />
        </li>
      </ul>
      <button className="btn">
        <ShoppingCartOutlined className="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
