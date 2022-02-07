import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login-container">
        <div className="user-container">
          <h1>Welcome Back</h1>
          <p>Sign in to continue using Shop.</p>
          <label>
            <p>EMAIL OR USERNAME</p>
            <input type="text" placeholder="John@example.com" />
          </label>
          <label>
            <p>PASSWORD</p>
            <input type="password" placeholder="*******" />
          </label>
          <div className="forget">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="btn-section">
            <button className="btn">LOGIN</button>
            <p>OR</p>
            <button className="btn-social">LOGIN WITH GOOGLE</button>
            <button className="btn-social">LOGIN WITH FACEBOOK</button>
          </div>
          <p>
            Don't have an account?{" "}
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
