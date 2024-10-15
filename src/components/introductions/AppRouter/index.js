import React from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { One } from "./Route/one";
import { Two } from "./Route/two";
import { Three } from "./Route/three";
import { Button } from "react-bootstrap";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="Container p-1">
      <div className="row">
        <div className="col-4">
          <Link to="one">
            <Button
              className="w-lg-50"
              variant={location.pathname === "/router/one" ? "primary" : "outline-primary"}
            >
              page One
            </Button>
          </Link>
        </div>
        <div className="col-4">
          <Link to="two">
            <Button
              className="w-lg-50"
              variant={location.pathname === "/router/two" ? "danger" : "outline-danger"}
            >
              page Two
            </Button>
          </Link>
        </div>
        <div className="col-4">
          <Link to="three">
            <Button
              className="w-lg-50"
              variant={location.pathname === "/router/three" ? "success" : "outline-success"}
            >
              page Three
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
        <Route path="three" element={<Three />} />
      </Routes>
    </div>
  );
};

export { AppRouter };
