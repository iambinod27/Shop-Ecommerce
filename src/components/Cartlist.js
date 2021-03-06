import { Delete } from "@material-ui/icons";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Cartlist = ({ name, price, brand, img, id, quantity, total }) => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
  };

  const increment = (id) => {
    cart.find((item) => {
      if (item.id === id) {
        return (item.quantity += 1);
      }
    });

    cart.find((item) => {
      if (item.id === id) {
        const amount = item.price;
        const qty = item.quantity;
        return (item.total = amount * qty);
      }
    });

    setCart((prevItem) => [...prevItem]);
  };

  const decrement = (id) => {
    cart.find((item) => {
      if (item.id === id) {
        if (item.quantity <= 1) {
          return removeItem(id);
        }

        return (item.quantity -= 1);
      }
    });

    cart.find((item) => {
      if (item.id === id) {
        const amount = item.price;
        const qty = item.quantity;
        return (item.total = amount * qty);
      }
    });

    setCart((prevItem) => [...prevItem]);
  };

  return (
    <>
      {/* Cart-1 */}
      <div className="cart-item">
        <div className="cart-img">
          <img src={img} alt="" />
        </div>
        <div className="cart-name">
          <h3>{name}</h3>
          <p>{brand}</p>
        </div>
        <div className="cart-price">
          <h3>${price}</h3>
        </div>
        <div className="cart-quantity">
          <button onClick={() => increment(id)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => decrement(id)}>-</button>
        </div>

        <div className="cart-total">
          <h3>${total}</h3>
        </div>

        <div className="cart-remove">
          <Delete className="cart-delete" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};

export default Cartlist;
