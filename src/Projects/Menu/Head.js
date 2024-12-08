import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// Buttons component to handle category filter
const ButtonsHead = ({ filterdata, activeCategory }) => {
  const onFilter = (category) => {
    filterdata(category);
  };

  const getButtonClass = (category) => {
    return activeCategory === category ? "btn-success" : "btn-secondary"; // تغيير الخلفية
  };

  return (
    <>
      <Button
        onClick={() => onFilter("breakfast")}
        className={`w-25 m-1 ${getButtonClass("breakfast")}`}
      >
        Breakfast
      </Button>
      <Button
        onClick={() => onFilter("lunch")}
        className={`w-25 m-1 ${getButtonClass("lunch")}`}
      >
        Lunch
      </Button>
      <Button
        onClick={() => onFilter("dinner")}
        className={`w-25 m-1 ${getButtonClass("dinner")}`}
      >
        Dinner
      </Button>
      <Button
        onClick={() => onFilter("all")}
        className={`w-25 m-1 ${getButtonClass("all")}`}
      >
        All
      </Button>
    </>
  );
};

// Title component with dynamic like count
const Title = ({ likeCount }) => {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <h3 className="font_arabic text-center text-decoration-underline p-3">
            Restaurant Menu
          </h3>
        </Col>
        <Col xs={3}>
          <h5 className="font_arabic text-end p-3">
            <span className='text-danger'>
              <i className="fa-solid fa-heart"></i>
            </span>{" "}
            {likeCount}
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

// Main Head component that includes Title and ButtonsHead
const Head = ({ likeCount, filterdata, activeCategory }) => {
  return (
    <div>
      <Title likeCount={likeCount} />
      <ButtonsHead filterdata={filterdata} activeCategory={activeCategory} />
    </div>
  );
};

export { Head, ButtonsHead, Title };
