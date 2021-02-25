import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
            <LinkContainer to="/">
              <Nav.Link>ACCUEIL</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link >SHOP</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>A PROPOS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>BLOG</Nav.Link>
            </LinkContainer>
            <div className="account-shopping">
              <div className="account-icon">
              <i className="fas fa-id-card"/>
              <LinkContainer to="/login">
                <Nav.Link>Mon Compte</Nav.Link>
              </LinkContainer>
              </div>
              <LinkContainer to="/blog">
                <Nav.Link><i className="fas fa-shopping-basket" /></Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;
