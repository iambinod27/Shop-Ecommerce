import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function Accessories() {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const { items } = useContext(ProductContext);
  const [item, setItem] = items;

  const filterItems = () => {
    const newItems = product.filter((item) => item.category === "Accessories");

    setItem(newItems);
  };

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="header-showcase">
            <h2>Accessories</h2>
            <Link
              to="/product"
              style={{ textDecoration: "none" }}
              onClick={filterItems}
              state={{ brand: "Accessories" }}
            >
              <p>
                view all <ArrowForwardIosOutlined className="forward" />
              </p>
            </Link>
          </div>
          <ArrowBackIosOutlined className="sliderArrow left" />

          <div className="Products-container">
            {product.map((item) => {
              if (item.category === "Accessories") {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.productName}
                    price={item.price}
                    img={item.image}
                    brandName={item.brandName}
                    quantity={item.quantity}
                    category={item.category}
                    shortDesc={item.shortDesc}
                  />
                );
              }
            })}
          </div>
          <ArrowForwardIosOutlined className="sliderArrow right" />
        </div>
      </div>
    </section>
  );
}

export default Accessories;
