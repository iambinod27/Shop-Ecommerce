import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

const ProductView = () => {
  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const location = useLocation();
  const { brand } = location.state;

  const { items } = useContext(ProductContext);
  const [item, setItem] = items;

  const addCart = (name, price, brandName, img, quantity, total, id) => {
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
    <section className="view">
      <div className="container">
        <div className="view-one">
          <h1>{brand} products</h1>
        </div>
        <div className="view-two">
          {item.length <= 0 ? (
            <h1> No products are availible</h1>
          ) : (
            item.map((item) => {
              const {
                id,
                image,
                price,
                productName,
                brandName,
                category,
                quantity,
                shortDesc,
              } = item;

              return (
                <section key={id}>
                  <div className="view-item">
                    <div className="view-container">
                      <img src={image} alt="" />
                      <h1>${price}</h1>
                      <Link
                        to={`/productdetail/${id}`}
                        state={{
                          name: productName,
                          price: price,
                          image: image,
                          brand: brandName,
                          category: category,
                          quantity: quantity,
                          shortDesc: shortDesc,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="product-name">{productName}</div>
                      </Link>
                      <button
                        className="btn"
                        onClick={() =>
                          addCart(
                            productName,
                            price,
                            brandName,
                            image,
                            quantity,
                            price,
                            id
                          )
                        }
                      >
                        <ShoppingCartOutlined className="cart" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </section>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
