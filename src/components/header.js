import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUser, FaSignOutAlt ,FaShoppingCart} from 'react-icons/fa';
import { BsCart4,BsCSquare } from "react-icons/bs";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-primary">
          <BsCSquare size={30}/> PhoneStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-dark">
              Products
            </Nav.Link>
            <Nav.Link href="#" className="text-dark">
              ProductsTypes
            </Nav.Link>
            <Nav.Link href="#" className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#" className="text-dark">Giỏ Hàng<BsCart4 size={30} /></Nav.Link>
            <Button variant="outline-primary" className="me-2">
              <FaUser className="me-1" />
              Login
            </Button>
            <Button variant="primary">
              <FaSignOutAlt className="me-1" />
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

