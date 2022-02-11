import {
  ShoppingCartOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({
  name,
  price,
  id,
  img,
  brandName,
  quantity,
  category,
  shortDesc,
}) => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const addCart = (id) => {
    const exist = cart.find((item) => item.id === id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevItem) => [
        ...prevItem,
        {
          id: id,
          name: name,
          price: price,
          brand: brandName,
          image: img,
          quantity: quantity,
          total: price,
        },
      ]);
    }
  };

  return (
    <div className="products">
      <img src={img} alt="#" />
      <h1>${price}</h1>
      <Link
        to={`/productdetail/${id}`}
        state={{
          id: id,
          name: name,
          price: price,
          image: img,
          brand: brandName,
          category: category,
          quantity: quantity,
          shortDesc: shortDesc,
        }}
        style={{ textDecoration: "none" }}
      >
        <h3>{name}</h3>
      </Link>

      <button className="btn" onClick={() => addCart(id)}>
        <ShoppingCartOutlined className="cart" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
