import React, {Suspense, useState} from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Header.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import {AppProvider} from "../context/AppContext";
import {AppContext} from "../context/AppContext";
import {useContext} from 'react';
import {Link} from "react-router-dom";
import drapeau_francais from '../assets/drapeau-francais.png';
import shopping_cart from '../assets/shopping-cart.png';

const Header = () => {

  const [cart, setCart] = useContext(AppContext);
  let totalPrice1 = 0;
  if (cart) {
    for (let data in cart.products) {
      totalPrice1 += parseFloat(cart.products[data].totalPrice)
    }
  }
  let user = '';

  if (localStorage.getItem('userName')) {
    user = localStorage.getItem('userName');
  }

  const productCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductCount : '';
  const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice: '';

  const { t, i18n } = useTranslation();


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [imgurl, setImgUrl] = useState("https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png")

  const handleClose = (lang, url) => {
    i18n.changeLanguage(lang).then(() => setAnchorEl(null)).then(() => setImgUrl(url));
  };
  return (
    <div>
      <div style={{backgroundColor: '#e72c59', textAlign: 'center', height: '70px'}}>
        <h1 className="free-livraison">Livraison GRATUITE en Europe (3-5 jours) à partir de 30€ d'achat</h1>
      </div>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="drapeau-container">
            <p className="langue">Fr</p>
            <img src={drapeau_francais} alt="drapeau français" className="drapeau-img"/>
          </div>
          <div className="my-account">
            <Link to={user ? '/mes-commandes' : '/login'}>
            <p className="my-account-text">{ user ? `Bienvenue ${user}` : 'Mon compte'}</p>
            </Link>
          </div>
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
            <img src={imgurl} alt="" className="img-pays"/>
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
              <MenuItem onClick={() => handleClose('en', 'https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('esp', 'https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('de', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png')}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" className="drapeau-allemand" alt=""/></MenuItem>
              <MenuItem onClick={() => handleClose('fr', 'https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png')}><img src="https://maxandlea.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt=""/></MenuItem>

            </Menu>
            <div className="account-shopping">
              <LinkContainer to="/cart">
                <Nav.Link>

                  <div className="cart-wrap">
                    {productCount && (<div className="products-count-container">
                      <div className='product-count-inner-container'>{productCount ? <span className="product-count-text">{productCount}</span> : ''}</div>
                    </div>)}
                    <img src={shopping_cart} alt="shopping cart"/>
                    {totalPrice1 ? <span className="total-price-span">€{totalPrice1.toFixed(2)}</span> : ''}
                  </div>
                </Nav.Link>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
