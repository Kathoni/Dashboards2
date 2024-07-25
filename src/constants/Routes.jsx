import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Landing = React.lazy(() => import("../pages/Landing"));
const DashboardOne = React.lazy(() => import("../pages/DashboardOne"));
function BaseRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<DashboardOne />} />
          
        </Routes>
      </Router>
    </Suspense>
  );
}

export default BaseRouter;
