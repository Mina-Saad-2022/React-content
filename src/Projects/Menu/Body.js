import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Body = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <Col className="mb-2" xl={4} key={item.id}>
          <CardComponent item={item} />
        </Col>
      ))}
    </Row>
  );
};

const CardComponent = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="card-container">
      <Card.Img className="image_card" variant="top" src={item.photo} />
      <div
        className={`heart-icon ${isLiked ? "liked" : ""}`}
        onClick={toggleLike}
      >
        <i class="fa-solid fa-heart"></i>
      </div>
      <Card.Body>
        <Card.Title className="text-center">{item.name}</Card.Title>
        <Card.Text>
          <h5 className="text-danger">Category: {item.category}</h5>
        </Card.Text>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>
          <h5 className="text-danger">Price: {item.price}$</h5>
        </Card.Text>
        <Button className="w-100" variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export { Body };
