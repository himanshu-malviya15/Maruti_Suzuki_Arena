import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Finishround = (prop) => {
  return (
    <>
      <Navbar />
      <Link to="/dashboard">
        <div className="finish-page container">
          <h1 className="finish-text">Finish 1-A</h1>
        </div>
      </Link>
    </>
  );
};

export default Finishround;