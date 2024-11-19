import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

const Testing = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/", {
      method: "Get",
    })
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <Container className="border p-2">
      <Row>
        {state.map((item) => {
          return (
            <Col xl={3}>
              <Card key={item.id} style={{ height: "125px" }} className="m-2">
                <Card.Body>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text><p>{item.title}</p></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );

};

export { Testing };
