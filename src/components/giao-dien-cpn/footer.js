import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <Container>
        <div className="text-center">
          <p className="mb-2">Stay Connected</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="text-light me-3">
              Facebook
            </a>
            <a href="#" className="text-light me-3">
              Twitter
            </a>
            <a href="#" className="text-light">
              Instagram
            </a>
          </div>
        </div>
        <hr className="my-3" />
        <p className="text-center mb-0">
          &copy; 2023 PhoneStore. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

