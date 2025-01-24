import React, { useState } from "react";
//import './index.css'; // Ensure this path is correct based on your file structure

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submit action
    console.log("Login submitted with:", { username, password });
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login action
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    // Placeholder for Facebook login action
    console.log("Facebook login clicked");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <hr />
      <button onClick={handleGoogleLogin} className="google-login">
        Login with Google
      </button>
      <button onClick={handleFacebookLogin} className="facebook-login">
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;