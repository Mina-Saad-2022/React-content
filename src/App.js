import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { JSX } from "./components/introductions/JSX";
import { Props } from "./components/introductions/props";
import { ModernJS } from "./components/ModernJS";
import { AppRouter } from "./components/introductions/AppRouter";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { RenderList } from "./components/introductions/RenderList";
import { Events } from "./components/introductions/Events";
import { API } from "./API";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
          <h4 className="p-2 font-bold myText">React introductions :</h4>
          </div>
                  {/* links pages */}
          <div className="col-lg-9 col-sm-12 p-2">
            <div className="container">
              <div className="row">
                {/* Modern JS */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/ModernJS">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname === "/ModernJS"
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Modern JS
                    </Button>
                  </Link>
                </div>
                {/* JSX */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/jsx">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname === "/jsx"
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      JSX
                    </Button>
                  </Link>
                </div>
                {/* Props */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/props">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname === "/props"
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Props
                    </Button>
                  </Link>
                </div>
                {/* RenderList */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/renderList">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname === "/renderList"
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      RenderList
                    </Button>
                  </Link>
                </div>
                {/* Router */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/router/*">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname.startsWith("/router")
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Router
                    </Button>
                  </Link>
                </div>

                {/* Router */}
                <div className="col-lg-2 col-sm-4">
                  <Link to="/event">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname.startsWith("/event")
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Event
                    </Button>
                  </Link>
                </div>

                <div className="col-lg-2 col-sm-4 p-2">
                  <Link to="/api/">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname.startsWith("/api")
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      API
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Routes to go to my components */}
      <Routes>
        <Route path="/ModernJS" element={<ModernJS />} />
        <Route path="/jsx" element={<JSX />} />
        <Route path="/props" element={<Props />} />
        <Route path="/renderList" element={<RenderList />} />
        <Route path="/router/*" element={<AppRouter />} />
        <Route path="/event" element={<Events />} />
        <Route path="/api" element={<API />} />
      </Routes>
    </div>
  );
}

export default App;
