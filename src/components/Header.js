import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "./Header.css"
const Header = () => {
  return (
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <div style={{backgroundColor: '#E72C59', textAlign: 'center'}}>
          <h1 style={{margin: 0, color: 'white'}}>Livraison GRATUITE en Europe (3-5 jours) à partir de 30€ d'achat</h1>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-bar">
            <div className="img-container"><img src="https://maxandlea.com/wp-content/uploads/2020/05/Logo-Max-et-Lea_Plan-de-travail-1-1536x567.png" alt="" className="img-navbar"/></div>
            <Nav.Link href="#home">ACCUEIL</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <Nav.Link href="#link">A PROPOS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;
