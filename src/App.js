import "./styles.scss";
import Navbar from "./components/Navbar";
import FeaturedProduct from "./components/FeaturedProducts";
import Logo from "./components/Logo";

function App() {
  return (
    <main>
      <Navbar />

      <FeaturedProduct />

      <Logo />
    </main>
  );
}

export default App;
