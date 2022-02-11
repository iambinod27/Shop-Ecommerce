import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login">
      <div className="login-container">
        <div className="user-container">
          <h1>Welcome Back</h1>
          <p>Sign in to continue using Shop.</p>
          <form>
            <label>
              <p>EMAIL OR USERNAME</p>
              <input type="email" placeholder="John@example.com" />
            </label>
            <label>
              <p>PASSWORD</p>
              <input type="password" placeholder="password" />
            </label>
          </form>
          <div className="forget">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="btn-section">
            <button className="btn">LOGIN</button>
          </div>
          <p>
            Don't have an account?
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#2d3047" }}
            >
              Register Here
            </Link>
          </p>
        </div>
        <div className="img-container">
          <img src={require("../Assests/Login.jpg")} alt="Login" />
        </div>
      </div>
    </section>
  );
}

export default Login;
