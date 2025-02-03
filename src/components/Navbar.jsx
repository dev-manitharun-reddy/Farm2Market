import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const [showModal, setShowModal] = useState(false);

  const [role, setRole] = useState(localStorage.getItem("role"));

  const Login = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    const user = users.find((u) => u.username === username);
    if (user && user.password === password) {
      setIsLogged(true);
      localStorage.setItem("isLogged", true);
      setShowModal(false);

      // store the role of the user  which logged in and username of the
      // user in the local storage
      localStorage.setItem("role", user.role);
      localStorage.setItem("username", user.username);
      window.location.reload();
    } else {
      alert("Invalid username or password!");
    }
  };

  const Logout = () => {
    setIsLogged(false);
    localStorage.setItem("isLogged", false);
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <img
            src="https://ik.imagekit.io/manitharunreddy/INIZIO_LOGO-removebg-preview.png?updatedAt=1730648633003"
            alt="logo"
            height="60px"
            className="logo"
          />
          <ul className="menu">
            <li>
              <Link to="/" className="menu-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-btn">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="menu-btn">
                Products
              </Link>
            </li>
            <li>
              <Link to="/teams" className="menu-btn">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-btn">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="menu-btn"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                {isLogged ? "Logout" : "Login"}
              </Link>
            </li>
            {!isLogged && (
              <li>
                <Link to="/register" className="menu-btn">
                  Register
                </Link>
              </li>
            )}

            {/* if ADMIN Transaction page if farmer product page */}

            {isLogged && role === "ADMIN" && (
              <li>
                <Link to="/my-orders" className="menu-btn">
                  Transactions
                </Link>
              </li>
            )}
            {isLogged && role === "FARMER" && (
              <li>
                <Link to="/my-products" className="menu-btn">
                  My Products
                </Link>
              </li>
            )}
            {isLogged && role === "FARMER" && (
              <li>
                <Link to="/my-transactions" className="menu-btn">
                  My Transactions
                </Link>
              </li>
            )}

            {/* // customer can have my orders page */}
            {isLogged && role === "CUSTOMER" && (
              <li>
                <Link to="/my-orders" className="menu-btn">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {/* <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div> */}
        </div>
      </nav>
      {/* // if logged show logout modal else show login modal only if the showmodal
      is true */}
      {showModal && isLogged && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Are you sure you want to logout?</h2>
            <button
              className="btn"
              onClick={() => {
                Logout();
              }}
            >
              Yes
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              No
            </button>
          </div>
        </div>
      )}
      {/* // if logged show logout modal with username and password to login */}
      {showModal && !isLogged && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
            />
            <button
              className="btn"
              onClick={() => {
                Login();
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
