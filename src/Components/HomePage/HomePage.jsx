// src/pages/HomePage.js
import React from "react";
import './HomePage.css';

function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <button>Shop Now</button>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="categories">
        <h2>Browse by Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <h3>Smartphones</h3>
            <p>Latest and greatest mobile phones</p>
          </div>
          <div className="category-item">
            <h3>Accessories</h3>
            <p>Phone cases, chargers, and more</p>
          </div>
          <div className="category-item">
            <h3>Smart Watches</h3>
            <p>Wearable technology for you</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
