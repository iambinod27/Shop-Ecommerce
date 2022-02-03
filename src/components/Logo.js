import React from "react";

function Logo() {
  return (
    <section className="logo-section">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-container">
            <ul className="logo-brands">
              <li>
                <img src={require("../Assests/acer_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/alienware_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/razer_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/asus_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/dell_2.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/hp_1_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/lenovo_2_1.png")} alt="" />
              </li>
              <li>
                <img
                  src={require("../Assests/microsoft-color-logo.png")}
                  alt=""
                />
              </li>
              <li>
                <img src={require("../Assests/msi_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/apple-color-log.png")} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
