import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { JSX } from "./components/introductions/JSX";
import { Props } from "./components/introductions/props";
import { ModernJS } from "./components/ModernJS";
import { AppRouter } from "./components/introductions/AppRouter";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { RenderList } from "./components/introductions/RenderList";

function Navigation() {
  const location = useLocation();

  return (
    <div className="col p-2  d-lg-flex justify-content-evenly">
      {/* Modern JS */}
      <Link to="/ModernJS">
        <Button className="m-sm-1"
          variant={location.pathname === "/ModernJS" ? "primary" : "outline-primary"}
        >
          Modern JS
        </Button>
      </Link>

      {/* JSX */}
      <Link to="/jsx">
        <Button
          variant={location.pathname === "/jsx" ? "primary" : "outline-primary"}
        >
          JSX
        </Button>
      </Link>

      {/* Props */}
      <Link to="/props">
        <Button
          variant={location.pathname === "/props" ? "primary" : "outline-primary"}
        >
          Props
        </Button>
      </Link>

      {/* RenderList */}
      <Link to="/renderList">
        <Button
          variant={location.pathname === "/renderList" ? "primary" : "outline-primary"}
        >
          RenderList
        </Button>
      </Link>

      {/* Router */}
      <Link to="/router/*">
        <Button
          variant={location.pathname.startsWith("/router") ? "primary" : "outline-primary"}
        >
          Router
        </Button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Container">
          <div className="row p-1">
            <h2 className="p-2 font-bold myText">React introductions :</h2>
            <div className="col-lg-5 col-sm-12">
              <input
                type="text"
                placeholder="Search..."
                className="form-control mb-3"
              />
            </div>
            <Navigation /> 
          </div>
        </div>

        {/* Routes to go to my components */}
        <Routes>
          <Route path="/ModernJS" element={<ModernJS />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/renderList" element={<RenderList />} />
          <Route path="/router/*" element={<AppRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
