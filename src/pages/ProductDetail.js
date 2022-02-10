import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Description from "../components/Description";
import Specification from "../components/Specification";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const [show, setShow] = useState(false);
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const location = useLocation();
  const { name, price, brand, image, category, quantity, shortDesc } =
    location.state;

  const addCart = () => {
    setCart((prevItem) => [
      ...prevItem,
      {
        id: new Date().getMilliseconds().toString(),
        name: name,
        price: price,
        brand: brand,
        image: image,
        total: price,
        quantity: quantity,
      },
    ]);
  };

  return (
    <section className="product-detail">
      <div className="container">
        <div className="content">
          <div className="content-img">
            <img src={image} alt="" />
          </div>
          <div className="content-detail">
            <div className="content-name">
              <p>
                {category} , {brand}
              </p>
              <h2>{name}</h2>
            </div>

            <div className="content-desc">
              <p>{shortDesc}</p>

              <div className="specification">
                <h1>Specification:</h1>
                <ul>
                  <li>
                    Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core
                  </li>
                  <li>Neural Engine</li>
                  <li>8GB unified memory</li>
                  <li>256GB SSD storage</li>
                  <li>Force Touch trackpad</li>
                </ul>
                <h2>${price}</h2>
                <button className="btn" onClick={addCart}>
                  <ShoppingCartOutlined className="cart" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="specification-detail">
          <ul>
            <li onClick={() => setShow(false)}>Description</li>
            <li onClick={() => setShow(true)}>Specification</li>
          </ul>

          <div className="info-box">
            {!show ? (
              <Description desc={shortDesc} name={name} />
            ) : (
              <Specification />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
