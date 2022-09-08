import React from "react";
import { Link } from "react-router-dom";

function LandinPage() {
  return (
    <div className="d-flex justify-content-center bg-dark align-items-center vh-100">
      <div>
        <h1 className="text-white">Landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dignissimos nobis modi sed aliquam illo possimus molestiae incidunt
          veniam. Et provident molestias voluptates consectetur impedit veniam
          natus iusto dicta? Quis?
        </p>
        <Link to="/products">
          {" "}
          <button className="btn btn-primary">View Products </button>
        </Link>
      </div>
    </div>
  );
}

export default LandinPage;
