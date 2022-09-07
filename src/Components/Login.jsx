import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center  align-items-center vh-100">
        <card className="card text-group p-5 bg-primary text-white">
          <h1>Login Page </h1>
          <hr />
          <label htmlFor="label">Email</label>
          <input type="text" />
          <br />

          <label htmlFor="label">Password</label>
          <input type="text" />
          <br />
          <Link to="/">
            {" "}
            <button className="btn btn-danger mx-6 my-3 ">Login</button>
          </Link>
        </card>
      </div>
    
  );
}

export default Login;
