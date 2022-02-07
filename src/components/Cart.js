import { ArrowBackIosOutlined, Delete } from "@material-ui/icons";
import Cartlist from "./Cartlist";

const Cart = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <div className="head-container">
          <h1>
            Shopping Cart <span>(3)</span>
          </h1>
          <span>remove all</span>
        </div>

        <Cartlist />

        <div className="cart-checkout">
          <div className="backShopping">
            <ArrowBackIosOutlined className="back" />
            continue shopping
          </div>

          <div className="checkout">
            <h3>Subtotal:</h3>
            <h1>$2100</h1>
            <button className="btn">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
