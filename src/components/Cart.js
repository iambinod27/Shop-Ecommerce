import { ArrowBackIosOutlined, Delete } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context/ProductContext";
import Cartlist from "./Cartlist";

const Cart = () => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  console.log(cart);

  const removeAll = () => {
    setCart([]);
  };

  return (
    <section className="cart-section">
      <div className="container">
        <div className="head-container">
          <h1>
            Shopping Cart <span>({cart.length})</span>
          </h1>
          <span onClick={removeAll}>remove all</span>
        </div>

        {cart.length <= 0 ? (
          <div className="cart-info">
            <h1>You have no items in your shopping cart.</h1>
          </div>
        ) : (
          <div className="cart-list">
            {cart.map((item) => {
              if (item.length <= 0) {
                return <h2>No Item on Cart</h2>;
              } else {
              }
              return (
                <Cartlist
                  name={item.name}
                  key={item.id}
                  price={item.price}
                  brand={item.brand}
                  img={item.image}
                  id={item.id}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        )}

        <div className="cart-checkout">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="backShopping">
              <ArrowBackIosOutlined className="back" />
              continue shopping
            </div>
          </Link>

          <div className="checkout">
            <h3>Subtotal:</h3>
            <h1>$0</h1>
            <button className="btn">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
