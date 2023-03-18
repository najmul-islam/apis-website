import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetEntriesQuery } from "../../features/apis/entriesApi";
const NavBar = () => {
  const { data: entries, isSuccess } = useGetEntriesQuery();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Public APIs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>Total-{isSuccess && entries.count}</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
