import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="text-white">
        <h1>Products Pages</h1>
        <Link to="/cart">
          <button className="btn btn-primary">Go to cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
