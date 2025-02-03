import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/Register";
import MyProducts from "./components/MyProducts";
import MyOrders from "./components/MyOrders";

function App() {
  const role = localStorage.getItem("role");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route
            path="my-orders"
            element={<MyOrders isAll={role === "ADMIN" ? true : false} />}
          />
          <Route
            path="my-orders"
            element={<MyOrders isAll={role === "ADMIN" ? true : false} />}
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
