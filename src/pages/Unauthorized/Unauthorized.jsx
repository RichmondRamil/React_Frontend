import React from "react";
import { useNavigate } from "react-router-dom";
import "./unauthorized.scss";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="Unauthorized">
      <div className="Unauthorized-container">
        <h1 className="unauth-h1">Unauthorized Error Code</h1>
        <h1 className="error-code">401</h1>
        <h3>No Authorization Found</h3>
        <p>This page is not publicly Available</p>
        <button onClick={goBack}>RETURN TO HOME</button>
      </div>
    </div>
  );
};

export default Unauthorized;
