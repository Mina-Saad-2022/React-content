import React from "react";
import { Container, Form, Navbar, Image } from "react-bootstrap";

const NavbarPart = ({ setSearchQuery }) => {
  // دالة تحديث النص المكتوب
  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // إرسال النص لـ Menu
  };

  return (
    <Navbar expand="lg" className="bg-dark-subtle">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex justify-content-start">
            <Form.Control
              type="search"
              placeholder="Search here"
              className="me-2 font_arabic w-75"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
        </Navbar.Collapse>

        <Navbar.Brand className="text-end font_arabic" href="#">
          <Image
            className="restaurant_logo"
            src="https://gcdnb.pbrd.co/images/EE6ygOh0FN50.png?o=1"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export { NavbarPart };
