import "./styles.scss";
import { ProductProvider } from "./context/ProductContext";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="signup" element={<Create />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </ProductProvider>
  );
}

export default App;
