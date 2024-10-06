import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { function_array_map } from "./array_map";
import { function_spread_operators } from "./spread_operators";
import { function_Destructuring } from "./Destructuring";
import { function_primitive_type } from "./primitive_type";
import { function_higher_order_function } from "./higher_order_function";
import { function_promise } from "./promises";
import { function_array_methodes } from "./array_methodes"; // لو index.js في نفس الفولدر

import { function_import_export } from "./import_export";

function modern_js() {
  return (
    <header className="App-header border m-2 p-3">
      <h2 className="p-2 fw-bold myText">modern javaScript :</h2>{" "}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col md={3} sm={12}>
            <Nav
              variant="pills"
              className="flex-column fw-bold text-center border p-2"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">import & export</Nav.Link>
                <Nav.Link eventKey="second">Spread operators</Nav.Link>
                <Nav.Link eventKey="third">Destructuring</Nav.Link>
                <Nav.Link eventKey="fourth">array map</Nav.Link>
                <Nav.Link eventKey="primitive type">primitive type</Nav.Link>
                <Nav.Link eventKey="array_methods">array methods</Nav.Link>
                <Nav.Link eventKey="higher order function">
                  higher order function
                </Nav.Link>
                <Nav.Link eventKey="promises">promises</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md={9} sm={12}>
            <Tab.Content className="border p-2">
              <Tab.Pane eventKey="first">{function_import_export()}</Tab.Pane>
              <Tab.Pane eventKey="second">
                {function_spread_operators()}
              </Tab.Pane>
              <Tab.Pane eventKey="third">{function_Destructuring()}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{function_array_map()}</Tab.Pane>
              <Tab.Pane eventKey="primitive type">
                {function_primitive_type()}
              </Tab.Pane>
              <Tab.Pane eventKey="array_methods">
                {function_array_methodes()}
              </Tab.Pane>
              <Tab.Pane eventKey="higher order function">
                {function_higher_order_function()}
              </Tab.Pane>
              <Tab.Pane eventKey="promises">{function_promise()}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </header>
  );
}

export { modern_js };
