import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="mizan-footer">
    <div className="mizan-container">
        <div className="mizan-footer-row">
          
            <div className="mizan-footer-col">
                <h3>About Mizan Mobile Shop</h3>
                <p>Your trusted destination for the latest smartphones, accessories, and top-notch service. We provide quality and affordability at the best prices.</p>
            </div>

        
            <div className="mizan-footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

            <div className="mizan-footer-col">
                <h3>Contact Us</h3>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> 123 Mobile Street, City, Country</li>
                    <li><i className="fas fa-phone"></i> +123 456 7890</li>
                    <li><i className="fas fa-envelope"></i> support@mizanmobileshop.com</li>
                </ul>
            </div>

        
            <div className="mizan-footer-col">
                <h3>Follow Us</h3>
                <div className="mizan-social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>

  
        <div className="mizan-footer-bottom">
            <p>&copy; 2025 Mizan Mobile Shop. All Rights Reserved.</p>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer
