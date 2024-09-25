import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import import_export from "./components/modern_js/import&export";
import {spread,Origin} from "./components/modern_js/spread_operators";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <header className="App-header  p-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column col-8">
                    <Nav.Item>
                      <Nav.Link eventKey="first">import & export</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Spread operators</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">{import_export()}</Tab.Pane>

                    <Tab.Pane eventKey="second">the number Origin is : {Origin()}<br/> the sperad operatores is Adding other data to the original content {spread()}</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
