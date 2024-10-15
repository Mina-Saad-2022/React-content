import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { function_array_map } from "./array_map";
import { function_spread_operators } from "./spread_operators";
import { function_Destructuring } from "./Destructuring";
import { function_primitive_type } from "./primitive_type";
import { function_higher_order_function } from "./higher_order_function";
import { function_promise } from "./promises";
import { function_array_methodes } from "./array_methodes";
import { function_import_export } from "./import_export";

function ModernJS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeKey, setActiveKey] = useState("first");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const keywords = [
      { title: "import & export", eventKey: "first" },
      { title: "Spread operators", eventKey: "second" },
      { title: "Destructuring", eventKey: "third" },
      { title: "array map", eventKey: "fourth" },
      { title: "primitive type", eventKey: "primitive type" },
      { title: "array methods", eventKey: "array_methods" },
      { title: "higher order function", eventKey: "higher order function" },
      { title: "promises", eventKey: "promises" },
    ];
    const matchedKeyword = keywords.find(({ title }) => title.toLowerCase().includes(value));
    setActiveKey(matchedKeyword ? matchedKeyword.eventKey : "first");
  };

  return (
    <header className="App-header ">
   <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="p-2 fw-bold myText">modern javaScript :</h2>
      <input
        type="text"
        placeholder="ابحث هنا..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleSearch} // استخدم handleSearch هنا
      />

      <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Row>
          <Col md={3} sm={12}>
            <Nav variant="pills" className="flex-column fw-bold text-center border p-2">
              <Nav.Item>
                <Nav.Link eventKey="first">import & export</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Spread operators</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Destructuring</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">array map</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="primitive type">primitive type</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="array_methods">array methods</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="higher order function">higher order function</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="promises">promises</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md={9} sm={12}>
            <Tab.Content className="border p-2">
              <Tab.Pane eventKey="first">{function_import_export()}</Tab.Pane>
              <Tab.Pane eventKey="second">{function_spread_operators()}</Tab.Pane>
              <Tab.Pane eventKey="third">{function_Destructuring()}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{function_array_map()}</Tab.Pane>
              <Tab.Pane eventKey="primitive type">{function_primitive_type()}</Tab.Pane>
              <Tab.Pane eventKey="array_methods">{function_array_methodes()}</Tab.Pane>
              <Tab.Pane eventKey="higher order function">{function_higher_order_function()}</Tab.Pane>
              <Tab.Pane eventKey="promises">{function_promise()}</Tab.Pane>
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

export { ModernJS };
