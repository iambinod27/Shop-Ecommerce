import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

const ProductView = () => {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { carts } = useContext(ProductContext);
  const [cart, setCart] = carts;

  const addCart = (name, price, brandName, img, quantity, total) => {
    setCart((prevItem) => [
      ...prevItem,
      {
        id: new Date().getMilliseconds().toString(),
        name: name,
        price: price,
        brand: brandName,
        image: img,
        quantity: quantity,
        total: price,
      },
    ]);
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
              <>
                <div className="view-item">
                  <div className="view-container">
                    <img src={item.image} alt="" />
                    <h1>${item.price}</h1>
                    <div className="product-name">{item.productName}</div>
                    <div className="btn">
                      <ShoppingCartOutlined
                        className="cart"
                        onClick={() =>
                          addCart(
                            item.productName,
                            item.price,
                            item.brandName,
                            item.image,
                            item.quantity,
                            item.price
                          )
                        }
                      />
                      Add to cart
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
