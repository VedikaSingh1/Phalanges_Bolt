import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [userType, setUserType] = useState("patient"); // Default to "Patient"
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    const passwordInput = passwordInputRef.current;
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    }
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Determine the API endpoint based on the selected user type
    const loginApiUrl =
      userType === "patient"
        ? "https://phalanges-bolt.onrender.com/patient/login"
        : "https://phalanges-bolt.onrender.com/doctor/login";

    fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => {
        //console.log("response is: ", response);
        if (!response.ok) {
          setLoginError(true);
          throw new Error("Login Failed"); // Handle specific error messages if needed
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        const jwtToken = data.data;
        console.log("login works. jwt: ", jwtToken);
        localStorage.setItem("jwtToken", jwtToken);
        navigate(`/${userType}`); // Redirect to the appropriate page
      })
      .catch((error) => {
        console.error("Login Failed:", error);
        setLoginError(true);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="item-1">
          <label htmlFor="userType">User Type: </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="item-2">
          <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="item-3">
          <input
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordInputRef}
          />
          <span id="eye" onClick={togglePasswordVisibility}>
            👁️
          </span>
        </div>

        <button id="btn_signin" type="submit">
          Sign In
        </button>
      </form>
      {loginError && (
        <p id="loginError">Login Failed. Please check your credentials.</p>
      )}
    </div>
  );
}
