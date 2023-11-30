
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <p className="text-center mb-0 text-muted">
          &copy; 2021 PhoneStore. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

