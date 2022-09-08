import React, { useState } from "react";
import {signup} from "../Api/auth";

function Login() {
  const [showSignUp, setShowSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const toggleSignup = () => {
    setShowSignUp(!showSignUp);
  };

  const signinHandler = () => {
    const user = (username, password, email);
    try {
      const res = signup(user);
      console.log(res);
    } catch (error) {
      console.log();
    }
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group m-1">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {showSignUp && (
            <div className=" input-group ">
              <input
                type="email  "
                className="form-control m-1"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className={showSignUp ? "trueClass" : "falseClass "}>
            <input
              type="submit"
              className="btn btn-primary form-control m-1"
              value={showSignUp ? "SignUp" : "Log In"}
              onClick={showSignUp ? signinHandler : signinHandler}
            />
          </div>
          <div className="m-1" onClick={toggleSignup}>
            <p className="lead text-primary m-1">
              {showSignUp
                ? "Already have an account ? Log In"
                : "Don't have an account ? Sign UP"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
