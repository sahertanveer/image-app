import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const customNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ background: "rgb(48, 48, 48) !important" }}
    >
      <Container className="bg-custom" style={{ marginTop: "-6px" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#!">ADD NOTATION</Nav.Link>
            <Nav.Link href="#!">RETAKE SCAN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default customNav;
