import React from "react"; // لازم تستورد React
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";

import { function_import_export } from "./components/modern_js/import_export";
import { function_array_map } from "./components/modern_js/array_map";
import { function_spread_operators } from "./components/modern_js/spread_operators";
import { function_Destructuring } from "./components/modern_js/Destructuring";
import { function_primitive_type } from "./components/modern_js/primitive_type";
import { function_higher_order_function } from "./components/modern_js/higher_order_function"; // استخدام استيراد بدون أقواس معكوسة
import { function_promise } from "./components/modern_js/promises";
import { function_array_methodes } from "./components/modern_js/array_methodes";


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header border m-2 p-3">
          <h2 className="p-2 font-bold myText">modern javaScript :</h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md={3} sm={12}>
                <Nav variant="pills" className="flex-column col-10 border p-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">import & export</Nav.Link>
                    <Nav.Link eventKey="second">Spread operators</Nav.Link>
                    <Nav.Link eventKey="third">Destructuring</Nav.Link>
                    <Nav.Link eventKey="fourth">array map</Nav.Link>
                    <Nav.Link eventKey="primitive type">
                      primitive type
                    </Nav.Link>
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
                  {/*  import export */}
                  <Tab.Pane eventKey="first">
                    {function_import_export()}
                  </Tab.Pane>
                  {/*  Spread operators */}
                  <Tab.Pane eventKey="second">
                    {function_spread_operators()}
                  </Tab.Pane>
                  {/* Destructuring */}
                  <Tab.Pane eventKey="third">
                    {function_Destructuring()}
                  </Tab.Pane>
                  {/* array map */}
                  <Tab.Pane eventKey="fourth">{function_array_map()}</Tab.Pane>
                  {/* primitive type */}
                  <Tab.Pane eventKey="primitive type">
                    {function_primitive_type()}
                  </Tab.Pane>
                  {/* array methods */}
                  <Tab.Pane eventKey="array_methods">
                   {function_array_methodes()}
                  </Tab.Pane>
                  {/* higher order function */}
                  <Tab.Pane eventKey="higher order function">
                    {function_higher_order_function()}
                  </Tab.Pane>
                  <Tab.Pane eventKey="promises">{function_promise()}</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </header>
      </div>
    </div>
  );
}
//   }
// }

export default App;
