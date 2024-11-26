import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavbarPart } from "./navbar";
import { ButtonsHead, Title } from "./Head";
import { Body } from "./Body";
const Menu = () => {
  return (
    <Container className="  bg-body-tertiary">
      <Row>
        <Col dir="rtl" className="p-0" xs={12}>
          <NavbarPart />
        </Col>
        <Col xs={12}>
          <Title />
        </Col>
        <Col className="font_arabic d-flex justify-content-evenly p-2" xs={12}>
          <ButtonsHead />
        </Col>
        <Col >
          <Body />
        </Col>
      </Row>
    </Container>
  );
};

export { Menu };
