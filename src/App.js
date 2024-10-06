import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { modern_js } from "./components/modern_js";
import { JSX } from "./components/introductions/JSX";
import { CardProps, Props } from "./components/introductions/props";
import { FunctionMap } from "./components/introductions/props/card";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header border p-3">
          <h2 className="p-2 font-bold myText">React introductions :</h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col md={2} sm={12}>
                <Nav variant="pills" className="flex-column col-10 border p-2">
                  <Nav.Item>
                    <Nav.Link eventKey="modern_js">Modern JS</Nav.Link>
                    <Nav.Link eventKey="JSX">JSX</Nav.Link>
                    <Nav.Link eventKey="props">props</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col md={10} sm={12}>
                <Tab.Content>
                  {/*  modern javascript */}
                  <Tab.Pane eventKey="modern_js">{modern_js()}</Tab.Pane>
                  <Tab.Pane eventKey="JSX">{JSX()}</Tab.Pane>
                  <Tab.Pane eventKey="props">
                    <div className="p-2">
                      <Props />
                    </div>
                    <div>
                      <FunctionMap />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </header>
      </div>
    </div>
  );
}

export default App;
