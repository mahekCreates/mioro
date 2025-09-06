import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  // update cartCount whenever localStorage changes 
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.length);
  }, []);

  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="logo-link">
            <img src="/assets/Logo.png" alt="Mioro Logo" className="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/cart" className="cart-icon-link">
              <FaShoppingCart size={22} />
              {cartCount > 0 && <span className="cart-dot"></span>}
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products setCartCount={setCartCount} />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cart" element={<Cart setCartCount={setCartCount} />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
