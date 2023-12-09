import React from 'react';
import { Navbar, Nav, Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { BsCart4, BsSquareFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../bootstrap-5.2.3/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="warning" expand="lg" variant="light" className="mb-4">
      <Container>
        <Navbar.Brand className="fw-bold">
          <BsSquareFill size={30} className="me-2 text-dark" /> PhoneStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="text-dark">
              Products
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Tìm kiếm"
                className="mr-sm-2 rounded-pill py-2 px-4 border-0 shadow-sm"
              />
              <Button variant="outline-dark" className="rounded-pill py-2 px-4">
                <BsSquareFill className="me-1 text-dark" /> Search
              </Button>
            </InputGroup>
            <Nav.Link as={NavLink} to="/giohang" className="text-dark me-3">
              Giỏ Hàng <BsCart4 size={30} className="text-dark" />
            </Nav.Link>
            <Button variant="outline-dark" className="me-2">
              <FaUser className="me-1 text-dark" />
              <NavLink to="/login" className="text-dark">
                Login
              </NavLink>
            </Button>
            <Button variant="dark">
              <FaSignOutAlt className="me-1 text-dark" />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
