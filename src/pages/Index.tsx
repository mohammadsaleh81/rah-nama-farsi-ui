
import React from "react";
import { Navigate } from "react-router-dom";

// Redirect from the index page to the homepage
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
