import ProductCard from "../ProductCard";
import { useState } from 'react';
import { products, categories } from "../data/products";
import heroImg from "../assets/heroImg.jpg";
import VeggiesImg from "../assets/VeggiesImg.jpg";

function Home({search, cart, addToCart, removeFromCart}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const visible = products
    .filter((product) => activeFilter === "All" || product.category === activeFilter)
    .filter((product) => 
      product.name.toLowerCase().includes(search.toLowerCase()) || 
      product.price.toLowerCase().includes(search.toLowerCase()));
  const shown = showAll ? visible : visible.slice(0, 6);

  function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start"})
  }

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="badge badge-green">The Best Online Store</span>
          <h1>Fresh Groceries <em>Delivered</em> To Your Doorstep</h1>
          <p>Shop farm-fresh fruits and vegetables with fast, reliable delivery.</p>
          
          <div className="hero-buttons">
            <button className="hero-btn" onClick={scrollToProducts}>Shop Now</button>
            <button className="hero-btn-outline" onClick={scrollToProducts}>View All Products</button>
          </div>

          <div className="hero-badges">
            <span className="badge">10k+ Customers</span>
            <span className="badge">Fresh Guaranteed</span>
          </div>
        </div>
        <img className="hero-image" src={heroImg} alt="Fresh Vegetables" />
      </section>

      <section className="deals">
        <div className="deals-text">
          <h2>Daily Deals <em>40-60% OFF</em></h2>
          <button className="deals-btn">Shop Now</button>
        </div>
        <img className="deals-image" src={VeggiesImg} alt="Daily deals"/>
      </section>

      <h2 className="section-title">Featured <em>Categories</em></h2>

        <div className="category-row">
          {categories.map((cat) => (
            <div className="category-tile" key={cat.id}>
              <img src={cat.image} alt={cat.label} />
              <p>{cat.label}</p>
            </div>
          ))}
        </div>

      <h2 id="products" className="section-title">Best Selling <em>Products</em></h2>

      <div className="filter-pills">
          {["All", "Vegetables", "Fruits", "Dairy & Eggs", "Sea Food", "Snacks"].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "pill active" : "pill"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
      </div>

      <ul className="product-grid">
      {shown.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);
        return(
            <li key = {product.id}>
              <ProductCard
                quantity={inCart ? inCart.quantity : 0}
                onAdd={() => addToCart(product.id)}
                onRemove={() => removeFromCart(product.id)}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                weight={product.weight}
                tag={product.tag}
              />
            </li>
          );
        })}
      </ul>

      {visible.length > 6 && (
        <div className="see-more-wrap">
          <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}

        {visible.length === 0 && <p>No Products Found</p>}
    
    </>
    
  );
}

export default Home;