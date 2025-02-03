import React, { useState, useEffect } from "react";
import "../styles/MyProducts.css";

const MyProducts = () => {
  const [productName, setProductName] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const [price, setPrice] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setLoggedInUser(user.username);

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(
      existingProducts.filter((product) => product.username === user?.username)
    );
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      productName,
      imageAddress,
      price,
      username: localStorage.getItem("username"),
    };
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    const isDuplicate = existingProducts.some(
      (product) =>
        product.username === loggedInUser && product.productName === productName
    );

    if (isDuplicate) {
      alert("Product with the same name already exists.");
      return;
    }

    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));
    setProducts(
      existingProducts.filter((product) => product.username === loggedInUser)
    );
    alert("Product added successfully!");
    setProductName("");
    setImageAddress("");
    setPrice("");
  };

  const handleDeleteProduct = (productName) => {
    const updatedProducts = products.filter(
      (product) =>
        product.productName !== productName || product.username !== loggedInUser
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div className="product-container">
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="text"
        placeholder="Image Address"
        value={imageAddress}
        onChange={(e) => setImageAddress(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field"
        required
      />
      <button onClick={handleAddProduct} className="add-button">
        Add Product
      </button>

      <h2>My Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.imageAddress}
              alt={product.productName}
              className="product-image"
            />
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleDeleteProduct(product.productName)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
