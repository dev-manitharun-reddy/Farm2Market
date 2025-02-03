import React from 'react';
import '../styles/Products.css';

const Products = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Our Products</h2>
        <div className="container">
          <div className="box">
            <span id="first"></span>
            <div className="content">
              <h2>Leafy Vegetables</h2>
              <p>Leafy vegetables are nutrient-rich and play a vital role in a balanced diet...</p>
            </div>
          </div>
          {/* Add more product boxes here */}
        </div>
      </div>
    </section>
  );
};

export default Products;