import { Delete } from "@material-ui/icons";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Cartlist = ({ name, price, brand, img, id, quantity }) => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
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
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>

        <div className="cart-remove">
          <Delete className="cart-delete" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};

export default Cartlist;
