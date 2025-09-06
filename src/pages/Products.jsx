import { useState } from "react";
import "./Products.css";

const products = [
  {
    name: "Chocolate Fudge",
    price: "50 per piece",
    priceValue: 50,
    category: "Fudge",
    image: "/mioro/assets/choco_fudge1.jpg",
    description: "Rich, creamy fudge made with dark chocolate and love.",
  },
  {
    name: "Heart Dust Brownie",
    price: "130 each",
    priceValue: 130,
    category: "Brownie",
    image: "/mioro/assets/brownie1.jpg",
    description: "Soft, Gooey & Fudgy chocolate brownie dusted with love.",
  },
  {
    name: "Almond Rock Chocolates",
    price: "40 per piece",
    priceValue: 40,
    category: "Bites",
    image: "/mioro/assets/AlmondRockChoco.jpg",
    description: "Crunchy almond chunks coated in silky milk chocolate.",
  },
  {
    name: "Mioro Heart Bites",
    price: "50 per piece",
    priceValue: 50,
    category: "Bites",
    image: "/mioro/assets/HeartBites.jpg",
    description:
      "Adorable heart-shaped bites with crunchy nuts, berries & bold flavors.",
  },
  {
    name: "Oreo Crunch Slab",
    price: "120 per slab",
    priceValue: 120,
    category: "Slab",
    image: "/mioro/assets/OreoSlab.jpg",
    description: "White chocolate slab bursting with Oreo crunch in every bite.",
  },
  {
    name: "Dark Chocolate Truffle",
    price: "60 per piece",
    priceValue: 60,
    category: "Truffle",
    image: "/mioro/assets/chocoTruffle.jpg",
    description: "Rich, velvety truffle dusted in cocoa — melts smoothly with every bite.",
  },
  {
    name: "Lemon Crunch Bliss",
    price: "60 per piece",
    priceValue: 60,
    category: "Truffle",
    image: "/mioro/assets/Lemon.jpg",
    description:
      "Zesty lemon cream hugged by rich chocolate, with a sparkling sugar crunch.",
  },
  {
    name: "Amber Zest",
    price: "40 per piece",
    priceValue: 40,
    category: "Bites",
    image: "/mioro/assets/Orange.jpg",
    description: "Silky orange chocolate with a refreshing citrus kick.",
  },
  {
    name: "Mystic Paan",
    price: "45 per piece",
    priceValue: 45,
    category: "Bites",
    image: "/mioro/assets/Paan.jpeg",
    description:
      "Chocolate hearts drizzled with color, carrying the refreshing twist of paan.",
  },
  {
    name: "Confetti Cream",
    price: "40 per piece",
    priceValue: 40,
    category: "Bites",
    image: "/mioro/assets/TuttiFruiti.png",
    description:
      "Creamy white chocolate sprinkled with vibrant tutti frutti for a playful bite.",
  },
  {
    name: "Tropical Truffle",
    price: "60 per piece",
    priceValue: 60,
    category: "Truffle",
    image: "/mioro/assets/coconut.jpg",
    description: "Rich chocolate outside, dreamy coconut inside.",
  },
  {
    name: "Choco Oreo Drizzle",
    price: "45 per piece",
    priceValue: 45,
    category: "Bites",
    image: "/mioro/assets/OreoBite.jpg",
    description: "Crunchy Oreo dipped in smooth chocolate, with a white drizzle for the perfect bite.",
  },
  {
    name: "Oreo Truffle",
    price: "65 per piece",
    priceValue: 65,
    category: "Truffle",
    image: "/mioro/assets/OreoTruffle.jpg",
    description: "Creamy Oreo truffle balls coated in rich chocolate, sprinkled with cookie crumbs for extra delight.",
  },
  {
    name: "Pomo Choco",
    price: "50 per piece",
    priceValue: 50,
    category: "Bites",
    image: "/mioro/assets/PomoChoco.jpg",
    description: "Milk chocolate hearts topped with juicy pomegranate gems, adding a burst of freshness in every bite.",
  },
  {
    name: "Classic Brookie",
    price: "90 each",
    priceValue: 90,
    category: "Brownie",
    image: "/mioro/assets/Brookie.jpg",
    description: "A fudgy brownie and cookie combined, giving the best of both worlds in every bite.",
  },
  {
    name: "Kunafa Crunch Bar",
    price: "180 per bar",
    priceValue: 180,
    category: "Slab",
    image: "/mioro/assets/Kunafa.jpg",
    description: "Layers of nutty kunafa and rich chocolate, crafted into a crunchy bar of delight.",
  },
  {
    name: "Matcha Bliss Cookie",
    price: "150 each",
    priceValue: 150,
    category: "Cookie",
    image: "/mioro/assets/matchaCookie.jpg",
    description: "Soft green tea cookie with chunks of creamy white chocolate for a fresh twist.",
  },
  {
    name: "Double Choco Cookie",
    price: "90 each",
    priceValue: 90,
    category: "Cookie",
    image: "/mioro/assets/doubleChocoCookie.jpg",
    description: "Chewy dark chocolate cookie loaded with melty chocolate chunks for pure indulgence.",
  },
  {
    name: "Classic Choco Chip",
    price: "90 each",
    priceValue: 90,
    category: "Cookie",
    image: "/mioro/assets/Cookie.jpg",
    description: "Golden brown cookie with gooey chocolate chips and a hint of sea salt.",
  },
  {
    name: "Matcha Choco Swirl Bark",
    price: "150 per slab",
    priceValue: 150,
    category: "Slab",
    image: "/mioro/assets/matchaSlab.jpg",
    description: "Creamy white chocolate swirled with matcha and dark chocolate, topped with crunchy bits.",
  },
];

function Products({ setCartCount }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500); 
  };

  const displayedProducts = products.filter(
    (product) =>
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Popup */}
      {showPopup && <div className="cart-popup">Added to Cart!</div>}

      <h1 className="home-heading">Our Products</h1>
      <hr />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["Fudge", "Brownie", "Slab", "Truffle", "Bites", "Cookie", "All"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={category === cat ? "filter-btn active" : "filter-btn"}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            setCartCount={setCartCount}
            triggerPopup={triggerPopup} 
          />
        ))}
      </div>

      {/* Customize Section */}
      <div className="customize-section">
        <h2>Want something unique?</h2>
        <p>Create your own chocolate with flavors, fillings & toppings you love!</p>
        <button
          className="whatsapp-button"
          onClick={() =>
            window.open(
              `https://wa.me/918291840140?text=${encodeURIComponent(
                "Hi! I’d like to customize my chocolate/dessert. Can you share the options with me?"
              )}`,
              "_blank"
            )
          }
        >
          Personalize Your Treat!
        </button>
      </div>

      {/* Fixed Customize Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          zIndex: 9999,
        }}
      >
        <button
          className="fixed-whatsapp-button"
          onClick={() =>
            window.open(
              `https://wa.me/918291840140?text=${encodeURIComponent(
                "Hi! I’d like to customize my chocolate/dessert. Can you share the options with me?"
              )}`,
              "_blank"
            )
          }
        >
          Craft Your Treat!
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, setCartCount, triggerPopup }) {
  const handleOrder = () => {
    const message = `Hi! I would like to order: ${product.name} for ₹${product.price}`;
    window.open(
      `https://wa.me/918291840140?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = existingCart.findIndex((p) => p.name === product.name);

    if (index !== -1) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({
        ...product,
        quantity: 1,
        priceValue: product.priceValue || parseInt(product.price) || 0,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    if (setCartCount) setCartCount(existingCart.length);

    triggerPopup(); // <-- Trigger popup here
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <span className="product-price">₹{product.price}</span>

      {/* Buttons */}
      <div className="button-group">
        <button className="whatsapp-button" onClick={handleOrder}>
          Order on WhatsApp
        </button>
        <button className="add-cart-button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
