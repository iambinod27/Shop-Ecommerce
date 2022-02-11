import { useRef, useState } from "react";

function Create() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  return (
    <section className="create">
      <div className="create-container">
        <div className="img-container">
          <img src={require("../Assests/Create.jpg")} alt="Login" />
        </div>
        <div className="user-container">
          <h1>CREATE ACCOUNT</h1>

          <form>
            <label>
              <p>Email</p>
              <input
                type="email"
                placeholder="John@example.com"
                required
                ref={emailRef}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                placeholder="*******"
                required
                ref={passwordRef}
              />
            </label>
            <label>
              <p>Password confirmation</p>
              <input
                type="password"
                placeholder="*******"
                required
                ref={passwordConfirmationRef}
              />
            </label>
            <div className="agree">
              <input type="checkbox" />
              <p>I agree to the terms & conditions</p>
            </div>

            <div className="btn-section">
              <button type="submit" className="btn">
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Create;
