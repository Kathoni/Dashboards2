import React, { Suspense } from "react";
import { appLinks } from "./Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Landing = React.lazy(() => import("../pages/Landing"));
const DashboardOne = React.lazy(() => import("../pages/DashboardOne"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
function BaseRouter() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path={appLinks?.Landing} element={<Landing />} />
            <Route path={appLinks?.DashboardOne} element={<DashboardOne />} />
            <Route path={appLinks?.Login} element={<Login />} />
            <Route path={appLinks?.Register} element={<Register />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default BaseRouter;
