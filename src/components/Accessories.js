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

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-container">
          <h2>Accessories</h2>
          <ArrowBackIosOutlined className="sliderArrow left" />

          <div className="Products-container">
            {product.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.productName}
                  price={item.price}
                />
              );
            })}
          </div>
          <ArrowForwardIosOutlined className="sliderArrow right" />
        </div>
      </div>
    </section>
  );
}

export default Accessories;
