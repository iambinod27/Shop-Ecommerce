import React from "react";

function Logo() {
  return (
    <section className="logo-section">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-container">
            <ul className="logo-brands">
              <li>
                <img src={require("../Assests/logo/acer_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/alienware_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/razer_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/asus_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/dell_2.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/hp_1_1.png")} alt="" />
              </li>
              <li>
                <img src={require("../Assests/logo/lenovo_2_1.png")} alt="" />
              </li>
              <li>
                <img
                  src={require("../Assests/logo/microsoft-color-logo.png")}
                  alt=""
                />
              </li>
              <li>
                <img src={require("../Assests/logo/msi_1.png")} alt="" />
              </li>
              <li>
                <img
                  src={require("../Assests/logo/apple-color-log.png")}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
