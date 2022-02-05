import Accessories from "../components/Accessories";
import Banner from "../components/Banner";
import BestSelling from "../components/BestSelling";
import FeaturedProduct from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main>
      <Navbar />

      <FeaturedProduct />

      <Logo />

      <BestSelling />

      <Banner />

      <Accessories />
      <Footer />
    </main>
  );
}

export default Home;
