import { Delete } from "@material-ui/icons";

const Cartlist = () => {
  return (
    <div className="cart-list">
      {/* Cart-1 */}
      <div className="cart-item">
        <div className="cart-img">
          <img src={require("../Assests/Laptops/AcerNitro5AN517.jpg")} alt="" />
        </div>
        <div className="cart-name">
          <h2>Acer Nitro 5</h2>
          <p>brand name</p>
        </div>
        <div className="cart-price">
          <h3>$700.00</h3>
        </div>
        <div className="cart-quantity">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>

        <div className="cart-remove">
          <Delete className="cart-delete" />
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
