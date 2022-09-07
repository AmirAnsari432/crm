import React, { useState } from "react";

function Login() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleSignup = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="d-flex justify-content-center bg-black align-items-center vh-100">
      <div>
        <h1 className="text-white">Welcome to Go-Ecomm!</h1>
        <div className="card p-5 text-center bg-dark">
          <div className="card-title text-white">
            <h4>{showSignUp ? "Sign Up " : "Log In"}</h4>
          </div>
          <div className="input-group m-1">
            <input
              type="text "
              className="form-control"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="input-group m-1">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="Password"
            />
          </div>
          {showSignUp && (
            <div className=" input-group m-1">
              <input
                type="email  "
                className="form-control m-1"
                placeholder="Email"
                id="email"
              />
            </div>
          )}
          <div className={showSignUp ? "trueClass" : "falseClass "}>
            <input
              type="submit"
              className="btn btn-primary form-control m-1"
              value={showSignUp ? "SignUp" : "Log In"}
            />
          </div>
          <div className="m-1" onClick={toggleSignup}>
            <p className="lead text-primary m-1">
              {showSignUp
                ? "Already have a account ? Log In"
                : "Don't have any account ? Sign UP"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
