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

    <div class="flex" id="registration-form">
      <div class="flex bg-white">
        <div class="w-full px- md:px-3 lg:px-0">
          <form onSubmit={handleSubmit}
            class="bg-white rounded-md shadow-2xl p-5">
            <h1 class="text-gray-800 font-bold text-5xl mb-1">Hello!</h1>
            <p class="text-sm font-normal text-gray-600 text-3xl mb-12">Register here and play your favorite childhood games...</p>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-1xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                class=" pl-2 w-full outline-none border-none" placeholder="Username" />
            </div>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-1xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                class=" pl-2 w-full outline-none border-none" placeholder="Email" />
            </div>
            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-1xl ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                class="pl-2 w-full outline-none border-none"
                placeholder="Set a Password" />
            </div>
            <a href="/account">
              <button type="submit"
                class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
