import React from "react";
import { Container, Button, Form, Navbar, Image } from "react-bootstrap";

const NavbarPart = () => {
  return (
    <Navbar expand="lg" className="  bg-dark-subtle">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand className="font_arabic" href="#">
          <Image
            className=" ms-auto restaurant_logo"
            src="https://gcdnb.pbrd.co/images/EE6ygOh0FN50.png?o=1"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex justify-content-end">
            <Form.Control
              type="search"
              placeholder="إبحث هنا"
              className="ms-2 font_arabic w-50"
              aria-label="Search"
            />
            <Button className="font_arabic " variant="outline-success">
              إبحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavbarPart };
