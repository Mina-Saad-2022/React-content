import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import import_export from "./components/modern_js/import&export";
import {
  spread,
  Origin,
  data,
  add_data,
} from "./components/modern_js/spread_operators";
import { first, second } from "./components/modern_js/Destructuring";

function App() {
  const { id, name } = data();
  const { age } = add_data();
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <header className="App-header  p-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column col-8 border p-2">
                    <Nav.Item>
                      <Nav.Link eventKey="first">import & export</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Spread operators</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Destructuring</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">{import_export()}</Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <ul>
                        <li>the number Origin is : {Origin()}</li>
                        <ol className="text-danger">
                          the sperad operatores is Adding other data to the
                          original content {spread()}
                        </ol>
                        <li>
                          I can use it within the object to add to existing data
                          or modify it
                        </li>
                        <ol>ID :{id}</ol>
                        <ol>Name : {name}</ol>
                        <ol className="text-danger">
                          the new data is Age : {age}
                        </ol>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ul>
                        <ol>the origin data is {first()}</ol>
                        <ol>{second()}</ol>
                      </ul>
                    </Tab.Pane>
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
