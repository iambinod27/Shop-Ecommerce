import React from "react";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-container">
            <div className="delivery">
              <h1>GET YOUR DESIRED GADGETS</h1>
              <button className="btn">FREE DELIVERY</button>
            </div>
            <div className="order">
              <img
                src={require("../Assests/logo/seo_148852423258b913c814b9c.jpg")}
                alt=""
              />
              <button className="btn">ORDER NOW!!!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
