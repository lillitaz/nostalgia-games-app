import "./RegisterForm.css";
import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = { username, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/create/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("User registered successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
