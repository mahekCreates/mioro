import { useEffect, useRef } from "react";
import "./CategoryImage.css";

function CategoryImage({ product }) {
  const ref = useRef(null);

  useEffect(() => {
    // Only enable scroll animation on mobile
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

      if (ref.current) observer.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="category-image-container">
      <img src={product.image} alt={product.title} className="category-image" />
    </div>
  );
}

export default CategoryImage;
