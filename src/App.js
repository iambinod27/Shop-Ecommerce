import "./styles.scss";
import { ProductProvider } from "./context/ProductContext";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ProductProvider>
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="signup" element={<Create />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id/:name" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ProductProvider>
  );
}

export default App;
