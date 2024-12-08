import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

// Card component to display item information
const CardComponent = ({ item, toggleLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Toggle the like state
    toggleLike(item.id); // Trigger like callback in the parent component
  };

  return (
    <Card className="card-container">
      <Card.Img className="image_card" variant="top" src={item.photo} />
      <div
        className={`heart-icon ${isLiked ? "liked" : ""}`}
        onClick={handleLikeClick}
      >
        <i className="fa-solid fa-heart"></i>
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
      </Card.Body>
    </Card>
  );
};

// Body component to filter and display items with search and category filter
const Body = ({ data, setSearchQuery, searchQuery, toggleLike }) => {
  // Filter items based on search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Row>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Col className="mb-2" xl={4} key={item.id}>
              <CardComponent item={item} toggleLike={toggleLike} />
            </Col>
          ))
        ) : (
          <h3 className="text-center">No items found!</h3>
        )}
      </Row>
    </div>
  );
};

export { Body };
