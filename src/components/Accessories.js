import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function Accessories() {
  const { products } = useContext(ProductContext);
  const [product, setProduct] = products;

  const filterItems = (category) => {
    if (category === "all") {
      setProduct(product);
    }

    const newItems = product.filter((item) => item.category === category);

    setProduct(newItems);
  };

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="header-showcase">
            <h2>Accessories</h2>
            <p>
              view all <ArrowForwardIosOutlined className="forward" />
            </p>
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
