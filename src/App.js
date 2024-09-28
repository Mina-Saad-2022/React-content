import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import import_export from "./components/modern_js/import&export";
import {
  spread,
  Origin,
  data,
  add_data,
} from "./components/modern_js/spread_operators";
import { first, second, third } from "./components/modern_js/Destructuring";
import {
  getUserData,
  createUserData,
} from "./components/modern_js/primitive_type";
import { array,array_map } from "./components/modern_js/array_map";

function App() {
  const { id, name } = data();
  const { age } = add_data();
  const primitive_old_data = getUserData();
  const primitive_new_data = createUserData();
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
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">array map</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="_4">primitive type</Nav.Link>
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
                        <ol>
                          when i type [des] the result ={" "}
                          <span className="text-danger">{second()}</span>
                        </ol>
                        <ol>
                          when i type [ , , des] the result ={" "}
                          <span className="text-danger">{third()}</span>
                        </ol>
                      </ul>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                      <ul>
                        <li>the origin data is : {array()}</li>
                        <li>the array map + 1  = <span className="text-danger">{array_map()}</span> </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="_4">
                      <ul>
                        <li>
                          the origin data is name :{" "}
                          <span className="text-danger">
                            {primitive_old_data.name}
                          </span>
                        </li>
                        <li>
                          after i use primitive type i change the data is name :{" "}
                          <span className="text-danger">
                            {primitive_new_data.name}
                          </span>
                        </li>
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
