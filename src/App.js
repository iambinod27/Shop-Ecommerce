import "./styles.scss";
import Navbar from "./components/Navbar";
import FeaturedProduct from "./components/FeaturedProducts";
import Logo from "./components/Logo";
import { ProductProvider } from "./context/ProductContext";
import BestSelling from "./components/BestSelling";
import Banner from "./components/Banner";
import Accessories from "./components/Accessories";
import Footer from "./components/Footer";

function App() {
  return (
    <ProductProvider>
      <main>
        <Navbar />

        <FeaturedProduct />

        <Logo />

        <BestSelling />

        <Banner />

        <Accessories />

        <Footer />
      </main>
    </ProductProvider>
  );
}

export default App;
