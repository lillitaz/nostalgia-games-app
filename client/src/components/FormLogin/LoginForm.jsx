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
                                        
                                <div class="flex" id="form">
                                        <div class="flex bg-white">
                                                <div class="items-center justify-between w-full lg:w justify-center items-center lg:px-0">
                                                        <form onSubmit={handleSubmit}
                                                                class="bg-white rounded-md shadow-2xl p-9">
                                                                <h1 class="text-gray-800 font-bold text-5xl mb-1">Hello Again!</h1>
                                                                <p class="text-sm font-normal text-gray-600 text-3xl mb-12">Welcome Back</p>
                                                                <div class="flex items-center border-2 mb-8 py-2 px-4 rounded-1xl">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                                        </svg>
                                                                        <input
                                                                                type="text"
                                                                                value={username}
                                                                                onChange={(event) => setUserName(event.target.value)}
                                                                                id="username" class=" pl-2 w-full outline-none border-none" placeholder="Username" />
                                                                </div>
                                                                <div class="flex items-center border-2 mb-12 py-2 px-4 rounded-1xl ">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                                        </svg>
                                                                        <input
                                                                                type="password"
                                                                                value={password}
                                                                                onChange={(event) => setPassword(event.target.value)}
                                                                                class="pl-2 w-full outline-none border-none"
                                                                                id="password"
                                                                                placeholder="Password" />
                                                                </div>
                                                                <a href="/account">
                                                                        <button type="submit" class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
                                                                </a>
                                                                <div class="flex justify-between mt-4">
                                                                        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                                                                        <a href="/register" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</a>
                                                                </div>
                                                                {errorMessage && <div className="error">{errorMessage}</div>}
                                                        </form>
                                                </div>
                                        </div>
                                </div>
                        )}
                </>
        );
};

export default LoginForm;
