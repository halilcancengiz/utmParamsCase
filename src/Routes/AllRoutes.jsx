import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ThankYouPage from "../pages/ThankYouPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you-page" element={<ThankYouPage />} />
    </Routes>
  );
};

export default AllRoutes;
