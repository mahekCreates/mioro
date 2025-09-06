import CategoryImage from '../components/CategoryImage';
import './Home.css';
import "../components/CategoryImage.css";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    title: 'Chocolate Brownie',
    image: '/mioro/assets/brownie1.jpg',
  },
  {
    id: 2,
    title: 'Choco Fudge',
    image: '/mioro/assets/Lemon.jpg',
  },
  {
    id: 3,
    title: 'Choco Truffle',
    image: '/mioro/assets/OreoBite.jpg',
  },
  {
    id: 4,
    title: 'Heart Bites',
    image: '/mioro/assets/HeartBites.jpg',
  },
  {
    id: 5,
    title: 'Oreo Slab',
    image: '/mioro/assets/OreoSlab.jpg',
  },
  {
    id: 6,
    title: 'Cookie',
    image: '/mioro/assets/Cookie.jpg',
  },
];

function Home() {
  useEffect(() => {
    if (window.innerWidth <= 600) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll(".hero-left img, .hero-right img")
        .forEach((el) => observer.observe(el));
    }
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <img src="/mioro/assets/main1.jpg" alt="mains" className="hero-image" />
        </div>
        <div className="hero-center">
        <div className="hero-center">
       <h1 className="hero-title">"Mioro – Where Every Bite Feels Like Home"</h1> <hr></hr>
        <p className="hero-tagline">Indulge in handcrafted chocolates and desserts made with love, just for you.</p>
        </div>
        </div>
        <div className="hero-right">
          <img src="/mioro/assets/main2.jpg" alt="mains" className="hero-image" />
        </div>
      </section>

      <section className="about">
        <h2>"Our Promise"</h2>
        <p>
          From our kitchen to your heart, Mioro promises treats made with premium ingredients, 
          pure passion, and a sprinkle of sweetness in every bite.
        </p>
      </section>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className={product.id === 3 ? "mobile-only" : ""}>
            <CategoryImage product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;