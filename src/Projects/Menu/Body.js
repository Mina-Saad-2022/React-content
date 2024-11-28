import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Body = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <Col className="mb-2" xl={4} key={item.id}>
          <Card>
            <Card.Img className="image_card" variant="top" src={item.photo} />
            <Card.Body>
              <Card.Title className="text-center">{item.name}</Card.Title>
              <Card.Text>
                <h5 className="text-danger">Category: {item.category}</h5>
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <h5 className="text-danger">price: {item.price}$ </h5>
              </Card.Text>
              <Button className="w-100" variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export { Body };
