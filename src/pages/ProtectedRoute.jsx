import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  const navigate = useNavigate();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
