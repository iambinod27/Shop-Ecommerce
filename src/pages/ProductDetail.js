import React from "react";
import { useState } from "react";
import Description from "../components/Description";
import Specification from "../components/Specification";

const ProductDetail = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="product-detail">
      <div className="container">
        <div className="content">
          <div className="content-img">
            <img
              src={require("../Assests/Laptops/msi-_0035_GF63-Thin-10SCXR-4.jpg")}
              alt=""
            />
          </div>
          <div className="content-detail">
            <div className="content-name">
              <p>categories , brandname</p>
              <h2>MSI GF63 Thin Laptop</h2>
            </div>

            <div className="content-desc">
              <p>
                Apple Macbook Pro 13.3 inch comes with M1 Chip with 8-Core CPU,
                8-Core GPU, 8GB, 256GB
              </p>

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
                <h2>$ 959.00</h2>
                <button className="btn">Add to cart</button>
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
            {!show ? <Description /> : <Specification />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
