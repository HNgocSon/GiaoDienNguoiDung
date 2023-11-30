
import React from 'react';
import Header from './header';
import { Container } from 'react-bootstrap';
import Footer from './footer';

import '../App.css';

      const Layout = ({ children }) => {
      return (
        <>
          <Header />
          <Container className="my-4">{children}</Container>
              <div style={{ padding: '20px' }}>
            <h1>Welcome to Phone Store!</h1>
            <p>Your content goes here.</p>
          </div>
          <Footer />
        </>
      );
    };
 

export default Layout;

