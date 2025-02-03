import React, { useState, useEffect } from "react";
import "../styles/MyTransactions.css";

const MyTransactions = ({ isAll }) => {
  const [orders, setOrders] = useState([]);

  const loggedInUser = localStorage.getItem("username");

  // Fetch orders from localStorage when the component mounts
  useEffect(() => {
    const fetchedOrders =
      JSON.parse(localStorage.getItem("transactions")) || [];
    // Filter orders by the logged-in user
    if (isAll) {
      setOrders(fetchedOrders);
    } else {
      const userOrders = fetchedOrders.filter(
        (order) => order.farmerName === loggedInUser
      );
      setOrders(userOrders);
    }
  }, [loggedInUser]);

  // Function to format price
  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  // Render order details (simple)
  const renderOrderDetails = (order) => {
    return (
      <div className="order-details">
        <p>
          <strong>Product Name:</strong> {order.productName}
        </p>
        <p>
          <strong>Price:</strong> ${formatPrice(order.price)}
        </p>
        <p>
          <strong>Quantity:</strong> {order.qty}
        </p>
        <p>
          <strong>Farmer Name:</strong> {order.farmerName}
        </p>
        <p>
          <strong>Customer Name:</strong> {order.customerName}
        </p>
      </div>
    );
  };

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found for {loggedInUser}.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <div className="order-summary">
                <p>
                  <strong>Product Name:</strong> {order.productName}
                </p>
                <p>
                  <strong>Quantity:</strong> {order.qty}
                </p>
                <p>
                  <strong>Price:</strong> ${order.price}
                </p>
                <p>
                  <strong>Farmer Name:</strong> {order.farmerName}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTransactions;
