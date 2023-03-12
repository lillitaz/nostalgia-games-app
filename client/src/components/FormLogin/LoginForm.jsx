import "./LoginForm.css";
import React, { useState } from "react";

const LoginForm = () => {
        const [username, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username") !== null && localStorage.getItem("password") !== null);

        const handleLogin = (username, password) => {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                setIsLoggedIn(true);
                alert("You are now logged in.");
        };
      

        const handleSubmit = async (event) => {
                event.preventDefault();

                try {
                        const response = await fetch("http://localhost:5000/api/user/login", {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ username, password }),
                        });

                        const data = await response.json();

                        if (data.success) {
                                handleLogin(username, password);
                        } else {
                                setErrorMessage(data.message);
                        }
                } catch (error) {
                        console.error(error);
                        setErrorMessage("An error occurred, please try again later.");
                }
        };

        const handleLogout = () => {
                localStorage.removeItem("password");
                localStorage.removeItem("username");
                setIsLoggedIn(false);
                alert("You are now logged out.");
        };

        return (
                <>
                        {isLoggedIn ? (
                                <div>
                                                <button onClick={handleLogout} to="http://localhost:3000/" >Log out</button>
                                </div>
                        ) : (
                                <form onSubmit={handleSubmit}>
                                        <label>
                                                Username:
                                                <input
                                                        type="text"
                                                        value={username}
                                                        onChange={(event) => setUserName(event.target.value)}
                                                />
                                        </label>
                                        <br />
                                        <label>
                                                Password:
                                                <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(event) => setPassword(event.target.value)}
                                                />
                                        </label>
                                        <br />
                                        {errorMessage && <div className="error">{errorMessage}</div>}
                                                <button type="submit">Login</button>
                                </form>
                        )}
                </>
        );
};

export default LoginForm;
