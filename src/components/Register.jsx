import React, { useState } from "react";
import "../styles/Register.css";

const roles = ["ADMIN", "FARMER", "CUSTOMER"];

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(roles[0]);

  const handleRegister = () => {
    const newUser = { username, password, role };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username already exists
    const isUsernameTaken = existingUsers.some(
      (user) => user.username === username
    );

    if (isUsernameTaken) {
      alert("Username already exists. Please choose a different username.");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");
    setUsername("");
    setPassword("");
    setRole(roles[0]);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
