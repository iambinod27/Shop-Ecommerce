import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Create() {
  return (
    <section className="create">
      <div className="create-container">
        <div className="img-container">
          <img src={require("../Assests/Create.jpg")} alt="Login" />
        </div>
        <div className="user-container">
          <div className="social-section">
            <h1>CREATE ACCOUNT</h1>
            <div className="btn-section">
              <button className="btn-social">Sign Up with Google</button>
              <button className="btn-social">Sign Up with Facebook</button>
            </div>
          </div>
          <div className="info">
            <p>or use your email for registration</p>
          </div>
          <label>
            <p>Full name</p>
            <input type="text" placeholder="John Doe" />
          </label>

          <label>
            <p>Email</p>
            <input type="email" placeholder="John@example.com" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" placeholder="*******" />
          </label>
          <div className="agree">
            <input type="checkbox" />
            <p>I agree to the terms & conditions</p>
          </div>

          <div className="btn-section">
            <button className="btn">Create an account</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;
