import React, { useEffect } from "react";
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
import { HOOKS } from "./components/introductions/Hooks";
import { FatchingData } from "./FatchingData";

// import { fun_Context } from "./components/introductions/Hooks/UseContext/ContextApi/MyContext";

function App() {
 
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  useEffect(() => {
    // Check if the session is already initialized
    if (!sessionStorage.getItem("sessionInitialized")) {
      // Increment the counter in localStorage
      const currentCount = Number(localStorage.getItem("openCount") || 0);
      localStorage.setItem("openCount", currentCount + 1);

      // Mark session as initialized
      sessionStorage.setItem("sessionInitialized", "true");
    }
  }, []);

  // Get the open count from localStorage
  const openCount = localStorage.getItem("openCount");

  const location = useLocation();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
          <h6 className="text-primary p-3 myText">The project has been opened <span className="text-danger">{openCount}</span> times.</h6>
          <h4 className="p-2 font-bold myText">React introductions :</h4>
          </div>
          {/* links pages */}
          <div className="col-12 col-md-8 p-2">
            <div className="container">
              <div className="row g-1">
                {/* Modern JS */}
                <div className="col-6 col-lg-2 p-1">
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
                <div className="col-6 col-lg-2 p-1">
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
                <div className="col-6 col-lg-2 p-1">
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
                <div className="col-6 col-lg-2 p-1">
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
                <div className="col-6 col-lg-2 p-1">
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
                {/* Event */}
                <div className="col-6 col-lg-2 p-1">
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
              
                {/* HOOKS */}
                <div className="col-6 col-lg-2 p-1">
                  <Link to="/hooks/">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname.startsWith("/hooks")
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Hooks
                    </Button>
                  </Link>
                </div>
                {/* Fatching data */}
                <div className="col-6 col-lg-2 p-1">
                  <Link to="/fatching_data/">
                    <Button
                      className="w-100"
                      variant={
                        location.pathname.startsWith("/fatching_data")
                          ? "primary"
                          : "outline-primary"
                      }
                    >
                      Fatching data
                    </Button>
                  </Link>
                </div>{" "}

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
        <Route path="/hooks" element={<HOOKS />} />
        <Route path="/fatching_data" element={<FatchingData />} />

      </Routes>
    </div>
  );
}

export default App;
