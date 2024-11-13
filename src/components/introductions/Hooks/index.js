import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { function_UseState } from "./UseState";
import { function_UseEffect } from "./UseEffect";
import { function_UseRef } from "./UseRef";
import { FunctionUseContext } from "./UseContext";
import { Function_UseMemo } from "./UseMemo";
import { Function_UseReducer } from "./UseReducer";
import { ContextApi } from "./UseContext/ContextApi/MyContext";

function HOOKS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeKey, setActiveKey] = useState("useState");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const keywords = [
      { title: "useState", eventKey: "useState" },
      { title: "useEffect", eventKey: "useEffect" },
      { title: "useRef", eventKey: "UseRef" },
      { title: "useContext", eventKey: "UseContext" },
      { title: "useMemo", eventKey: "UseMemo" },
      { title: "useReducer", eventKey: "UseReducer" },
    ];

    const matchedKeyword = keywords.find(({ title }) =>
      title.toLowerCase().includes(value)
    );
    setActiveKey(matchedKeyword ? matchedKeyword.eventKey : "useState");
  };

  return (
    <header className="App-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="p-2 fw-bold myText">React Hooks :</h2>
            <input
              type="text"
              placeholder="ابحث هنا..."
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
                <Col md={3} sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-column fw-bold text-center border p-2"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="useState">useState</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="useEffect">useEffect</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="UseRef">UseRef</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="UseContext">UseContext</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="UseMemo">UseMemo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="UseReducer">UseReducer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col md={9} sm={12}>
                  <Tab.Content className="border p-2">
                    <Tab.Pane eventKey="useState">
                      {function_UseState()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="useEffect">
                      {function_UseEffect()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="UseRef">{function_UseRef()}</Tab.Pane>
                    <Tab.Pane eventKey="UseContext">
                      <ContextApi>
                        <FunctionUseContext />
                      </ContextApi>
                    </Tab.Pane>
                    <Tab.Pane eventKey="UseMemo">{Function_UseMemo()}</Tab.Pane>
                    <Tab.Pane eventKey="UseReducer">
                      {Function_UseReducer()}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </header>
  );
}

export { HOOKS };
