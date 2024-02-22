import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // Replace 'your_login_api_url' with your actual login API endpoint
    const loginApiUrl =
      "https://traderg-marketplace-backend.onrender.com/user/login";

    fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          setLoginError(true);
          throw new Error("Login Failed"); // Handle specific error messages if needed
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        const jwtToken = data.data;
        localStorage.setItem("jwtToken", jwtToken);
        window.location.href = "Landingpage.html";
      })
      .catch((error) => {
        console.error("Login Failed:", error);
        setLoginError(true);
      });
  };

  return (
    <div>
      <h1>LOGIN PAGE REACHED</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button id="btn_signin" onClick={handleLogin}>
        Sign In
      </button>
      {loginError && (
        <p id="loginError">Login Failed. Please check your credentials.</p>
      )}
    </div>
  );
}
