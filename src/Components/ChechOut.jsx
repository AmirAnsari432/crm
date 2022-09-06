import React from "react";
import { Link } from "react-router-dom";

function ChechOut() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="text-white">
        <h1>Check Out</h1>
        <Link to='/'>
          <button className="btn btn-primary">Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default ChechOut;
