import Logo from "../Assests/shopping-bag-svgrepo-com.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <h1>Shop.</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="wrapper">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Laptops</li>
              <li>Desktops</li>
              <li>Acessories</li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="we-accept">
            <h3>We Accept</h3>
            <div className="accept-logo">
              <img src={require("../Assests/E-Sewa.png")} alt="" />
              <img
                src={require("../Assests/fonepay_payments_fatafat.png")}
                alt=""
              />
              <img src={require("../Assests/unnamed.png")} alt="" />
            </div>
          </div>
          <div className="follow">
            <h3>Follow us on</h3>
            <div className="social-media">
              <img
                src={require("../Assests/580b57fcd9996e24bc43c53e.png")}
                alt=""
              />
              <img
                src={require("../Assests/1024px-Facebook_Logo_(2019).png")}
                alt=""
              />
              <img
                src={require("../Assests/2048px-Instagram_icon.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right">
        Copyright &copy; 2022. Shop | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
