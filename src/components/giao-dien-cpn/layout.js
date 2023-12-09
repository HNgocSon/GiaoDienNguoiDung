
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './footer';

      const Layout = ({ children }) => {
      return (
        <>
          
          <Container className="my-4">{children}</Container>
              <div style={{ padding: '20px' }}>
          </div>
          <Footer />
        </>
      );
    };
 

export default Layout;

