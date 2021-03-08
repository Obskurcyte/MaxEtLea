import React, {Suspense} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Header.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import {AppProvider} from "../context/AppContext";
import {AppContext} from "../context/AppContext";
import {useContext} from 'react';


const Header = () => {

  const [cart, setCart] = useContext(AppContext);
  let totalPrice1 = 0;
  if (cart) {
    for (let data in cart.products) {
      totalPrice1 += parseFloat(cart.products[data].totalPrice)
    }
  }
  const productCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductCount : '';
  const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice: '';

  const { t, i18n } = useTranslation();


  console.log(cart)
  console.log(cart.totalProductCount)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  console.log('cart', cart)
  return (
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <div style={{backgroundColor: '#E72C59', textAlign: 'center'}}>
          <h1 style={{margin: 0, color: 'white'}}>Livraison GRATUITE en Europe (3-5 jours) à partir de 30€ d'achat</h1>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav-bar">
            <div className="img-container"><img src="https://maxandlea.com/wp-content/uploads/2020/05/Logo-Max-et-Lea_Plan-de-travail-1-1536x567.png" alt="" className="img-navbar"/></div>
            <LinkContainer to="/">
              <Nav.Link>{t("Navbar.1")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link >{t("Navbar.2")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{t("Navbar.3")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>{t("Navbar.4")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>{t("Navbar.5")}</Nav.Link>
            </LinkContainer>
            <img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt="" className="img-pays"/>
            <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="button-pays">
              <i className="fas fa-sort-down" />
            </button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleClose('fr')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('en')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('esp')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('al')}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" className="drapeau-allemand" alt=""/></MenuItem>

            </Menu>
            <div className="account-shopping">
              <div className="account-icon">
              <i className="fas fa-id-card"/>
              <LinkContainer to="/login">
                <Nav.Link>{t("Navbar.6")}</Nav.Link>
              </LinkContainer>
              </div>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <div className="woo-next-cart-wrap">
                    {productCount ? <span style={{color: 'black'}}>{productCount}</span> : ''}
                    <i className="fas fa-shopping-basket" />
                    {totalPrice1 ? <span>€{totalPrice1.toFixed(2)}</span> : ''}

                  </div>
                </Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;
