import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Fetching } from "./Fetch";
import { Axios } from "./Axios";
import { API } from "./testingApi";
import { Difference } from "./Difference";

function FatchingData() {
  return (
    <header className="App-header ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="p-2 fw-bold myText">Fetching Data :</h2>

            <Tab.Container id="left-tabs-example" defaultActiveKey="Fetching">
              <Row>
                <Col md={3} sm={12}>
                  <Nav
                    variant="pills"
                    className="flex-column fw-bold text-center border p-2"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="Fetching">Fetching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Axios">Axios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Difference">
                        Axios vs. Fetch
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Testing">Testing API</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col md={9} sm={12}>
                  <Tab.Content className="border p-2">
                    <Tab.Pane eventKey="Fetching">{Fetching()}</Tab.Pane>
                    <Tab.Pane eventKey="Axios">{Axios()}</Tab.Pane>
                    <Tab.Pane eventKey="Difference">{Difference()}</Tab.Pane>
                    <Tab.Pane eventKey="Testing">{API()}</Tab.Pane>
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

export { FatchingData };
