import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { JSX } from "./components/introductions/JSX";
import {
  CardProps,
  FunctionProps,
  Props,
} from "./components/introductions/props";
import { FunctionMap, FunOnClick } from "./components/introductions/props/card";
import { useState } from "react";
import { ModernJS } from "./components/ModernJS";
import { AppRouter } from "./components/introductions/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeKey, setActiveKey] = useState("first");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const keywords = [
      { title: "ModernJS", eventKey: "ModernJS" },
      { title: "JSX", eventKey: "JSX" },
      { title: "props", eventKey: "props" },
    ];

    const matchedKeyword = keywords.find(({ title }) =>
      title.toLowerCase().includes(value)
    );

    setActiveKey(matchedKeyword ? matchedKeyword.eventKey : "first");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid">
          <header className="App-header border p-3">
            <h2 className="p-2 font-bold myText">React introductions :</h2>

            <input
              type="text"
              placeholder="Search..."
              className="form-control mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />

            <Tab.Container
              id="left-tabs-example"
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
            >
              <Row>
                <Col md={2} sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-column col-10 border p-2"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="ModernJS">Modern JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="JSX">JSX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="props">props</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="RenderList">Render List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Router">Router</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col md={10} sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="ModernJS">
                      <ModernJS />
                    </Tab.Pane>
                    <Tab.Pane eventKey="JSX">
                      <JSX />
                    </Tab.Pane>
                    <Tab.Pane eventKey="props" className="border">
                      <div className="border m-1">
                        <Props />
                      </div>
                      <div className="border m-1">
                        <FunctionMap />
                      </div>
                      <div className="border m-1">
                        <FunctionProps />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="RenderList">
                      <JSX />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Router">
                      <AppRouter />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </header>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
