import React from "react";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-danger">
      <div>
        <h1 className="">Cart</h1>
        <Link to='/checkout'>
          <button className="btn btn-primary">CheckOut</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
