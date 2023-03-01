import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <div className="mb-3 flex-center-general">
      <Spinner animation="border" variant="success" role="status" />
      <span className="visually-active ms-1">{loadingMessage}</span>
    </div>
  );
};

export default LoadingSpinner;
