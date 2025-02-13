// src/pages/HomePage.js
import React from "react";
import iphone11promax from '../../assets/iphone11promax.jpeg'
import iphone13pro from '../../assets/iphone13pro.jpg'
import iphone13promax from '../../assets/iphone13promax.png'
import iphone14 from '../../assets/iphone14.jpg'
import galaxybuds3 from '../../assets/GalaxyBuds3.jpeg'
import galaxybuds3pro from '../../assets/GalaxyBuds3Pro.jpeg'
import galaxywatch7 from '../../assets/GalaxyWatch7.jpeg'
import galaxywatchultra from '../../assets/GalaxyWatchUltra.jpeg'
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



    <section className="carts-item container">
        <h2 className="carts-item">Premium PreLoved Smartphones</h2>
        <div className="carts-item product-grid">
            <div className="carts-item product">
                <img src={iphone14} alt="iPhone 14 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 14 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 192,000.00</del> NPR 111,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13pro} alt="iPhone 13 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 91,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13promax} alt="iPhone 13 Pro Max 128GB" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [128GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 85,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone11promax} alt="iPhone 11 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 11 Pro Max [512GB]</h3>
                <p className="carts-item price"><del>NPR 186,000.00</del> NPR 53,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
        </div>
    </section>



    <section className="carts-item container">
        <div className="carts-item product-grid">
            <div className="carts-item product">
                <img src={iphone14} alt="iPhone 14 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 14 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 192,000.00</del> NPR 111,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13pro} alt="iPhone 13 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 91,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13promax} alt="iPhone 13 Pro Max 128GB" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [128GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 85,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone11promax} alt="iPhone 11 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 11 Pro Max [512GB]</h3>
                <p className="carts-item price"><del>NPR 186,000.00</del> NPR 53,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
        </div>
    </section>



    <section className="carts-item container">
        <div className="carts-item product-grid">
            <div className="carts-item product">
                <img src={iphone14} alt="iPhone 14 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 14 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 192,000.00</del> NPR 111,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13pro} alt="iPhone 13 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [256GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 91,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone13promax} alt="iPhone 13 Pro Max 128GB" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 13 Pro Max [128GB]</h3>
                <p className="carts-item price"><del>NPR 131,900.00</del> NPR 85,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
            <div className="carts-item product">
                <img src={iphone11promax} alt="iPhone 11 Pro Max" className="carts-item"/>
                <h3 className="carts-item">Apple iPhone 11 Pro Max [512GB]</h3>
                <p className="carts-item price"><del>NPR 186,000.00</del> NPR 53,500.00</p>
                <button className="carts-item">Add to Cart</button>
            </div>
        </div>
    </section>



    <section className="different-equipment container">
        <h2 className="different-equipment">Multi Buy Offer</h2>
        <p className="different-equipment offer-text">Get up to 30% off selected Galaxy products on selected Watches, Tablets, Buds and more</p>
        <div className="different-equipment product-grid">
            <div className="different-equipment product">
                <img src={galaxywatchultra} alt="Galaxy Watch Ultra" className="different-equipment"/>
                <h3 className="different-equipment">Galaxy Watch Ultra (LTE, 47mm)</h3>
                <p className="different-equipment color"><strong>Color :</strong> Titanium Silver</p>
                <div className="different-equipment color-options">
                    <span className="different-equipment color-circle black"></span>
                    <span className="different-equipment color-circle blue selected"></span>
                    <span className="different-equipment color-circle gray"></span>
                </div>
                <p className="different-equipment price">$691.60</p>
                <p className="different-equipment discount"><del>$988.00</del> <span className="different-equipment save">Save $296.40</span></p>
                <button className="different-equipment add-button">Add</button>
            </div>

            <div className="different-equipment product">
                <img src={galaxybuds3pro} alt="Galaxy Buds3 Pro" className="different-equipment"/>
                <h3 className="different-equipment">Galaxy Buds3 Pro</h3>
                <p className="different-equipment color"><strong>Color :</strong> Silver</p>
                <div className="different-equipment color-options">
                    <span className="different-equipment color-circle blue selected"></span>
                    <span className="different-equipment color-circle gray"></span>
                </div>
                <p className="different-equipment price">$250.60</p>
                <p className="different-equipment discount"><del>$358.00</del> <span className="different-equipment save">Save $107.40</span></p>
                <button className="different-equipment add-button">Add</button>
            </div>

            <div className="different-equipment product">
                <img src={galaxybuds3} alt="Galaxy Buds3" className="different-equipment"/>
                <h3 className="different-equipment">Galaxy Buds3</h3>
                <p className="different-equipment color"><strong>Color :</strong> White</p>
                <div className="different-equipment color-options">
                    <span className="different-equipment color-circle gray"></span>
                    <span className="different-equipment color-circle blue selected"></span>
                </div>
                <p className="different-equipment price">$180.60</p>
                <p className="different-equipment discount"><del>$258.00</del> <span className="different-equipment save">Save $77.40</span></p>
                <button className="different-equipment add-button">Add</button>
            </div>

            <div className="different-equipment product">
                <img src={galaxywatch7} alt="Galaxy Watch7" className="different-equipment"/>
                <h3 className="different-equipment">Galaxy Watch7 (Bluetooth, 44mm)</h3>
                <p className="different-equipment color"><strong>Color :</strong> Green</p>
                <div className="different-equipment color-options">
                    <span className="different-equipment color-circle blue selected"></span>
                    <span className="different-equipment color-circle gray"></span>
                </div>
                <p className="different-equipment price">$348.60</p>
                <p className="different-equipment discount"><del>$498.00</del> <span className="different-equipment save">Save $149.40</span></p>
                <button className="different-equipment add-button">Add</button>
            </div>
        </div>
    </section>

    </div>
  );
}

export default HomePage;
