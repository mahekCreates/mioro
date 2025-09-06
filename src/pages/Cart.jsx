import { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ setCartCount }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    if (setCartCount) setCartCount(savedCart.length);
  }, [setCartCount]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    if (setCartCount) setCartCount(updatedCart.length);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    } else {
      updatedCart.splice(index, 1);
      updateCart(updatedCart);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const handleOrder = () => {
    if (cart.length === 0) return;

    const itemsList = cart.map((item) => `${item.name} x ${item.quantity}`).join(", ");
    const total = cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
    const message = `Hi! I would like to order: ${itemsList}. Total: ₹${total}`;

    window.open(`https://wa.me/918291840140?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <img src="/mioro/assets/2.png" alt="Empty Cart" />
          <h2>Your cart is empty!</h2>
          <p>Start adding some treats to see them here</p>
          <Link to="/products" className="shop-now-btn">Browse Products</Link>
        </div>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <div className="cart-controls">
                  <button className="qty-btn" onClick={() => decreaseQuantity(index)}>-</button>
                  <span className="qty">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => increaseQuantity(index)}>+</button>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="cart-total">
            Total: ₹{cart.reduce((total, item) => total + item.priceValue * item.quantity, 0)}
          </h2>

          <button className="shop-now-btn" onClick={handleOrder}>
            Order on WhatsApp
          </button>
        </div>
      )}

      <div className="cart-customize-section">
        <h2>Want something unique?</h2>
        <p>Create your own chocolate/dessert with flavors, fillings & toppings you love!</p>
        <button
          className="whatsapp-button"
          onClick={() =>
            window.open(
              `https://wa.me/918291840140?text=${encodeURIComponent(
                "Hi! I’d like to customize my chocolate/dessert. Can you share the options with me?"
              )}`, "_blank")}>
          Customize on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Cart;
