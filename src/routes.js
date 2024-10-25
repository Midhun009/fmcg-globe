// src/routes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// Import other page components as needed

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as necessary */}
    </Routes>
  );
};

export default RoutesComponent;
