import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

const ProductView = () => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const location = useLocation();
  const { brand } = location.state;
  console.log(brand);

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
          <h1>All availible Products</h1>
        </div>
        <div className="view-two">
          {product.map((item) => {
            return (
              <section key={item.id}>
                <div className="view-item">
                  <div className="view-container">
                    <img src={item.image} alt="" />
                    <h1>${item.price}</h1>
                    <Link
                      to={`/productdetail/${item.id}`}
                      state={{
                        name: item.productName,
                        price: item.price,
                        image: item.image,
                        brand: item.brandName,
                        category: item.category,
                        quantity: item.quantity,
                        shortDesc: item.shortDesc,
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="product-name">{item.productName}</div>
                    </Link>
                    <button
                      className="btn"
                      onClick={() =>
                        addCart(
                          item.productName,
                          item.price,
                          item.brandName,
                          item.image,
                          item.quantity,
                          item.price,
                          item.id
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
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
