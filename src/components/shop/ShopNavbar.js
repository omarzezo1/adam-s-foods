import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShopLogo from "../../images/imgs/shop-logo1.png";
import Search from "../../images/svg/search.svg";
import User from "../../images/svg/user.svg";
import Menu from "../../images/svg/menu-shop.svg";
import MobileMenu from "../../images/svg/menu-2.svg";
import Close from "../../images/svg/close.svg";
import Login from "../../images/svg/login.svg";
import Logout from "../../images/svg/logout.svg";
import Home from "../../images/svg/home.svg";
import Products from "../../images/svg/products.svg";
import Offer from "../../images/svg/offer.svg";
import Blog from "../../images/svg/blog.svg";
import Facebook from "../../images/svg/facebook.svg";
import Twitter from "../../images/svg/twitter.svg";
import Instagram from "../../images/svg/instagram.svg";
import Youtube from "../../images/svg/youtube.svg";

const ShopNavbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  return (
    <nav className={`${navScroll ? "shop-navbar onscroll" : "shop-navbar"}`}>
      <div className="container">
        <div className="shop-navbar-container">
          <ul
            className={mobileMenu ? "nav-links show-mobile-menu" : "nav-links"}
          >
            <img
              className="close-menu"
              src={Close}
              alt="close-menu"
              onClick={() => setMobileMenu(false)}
            />
            <li>
              <NavLink to="/shop">
                <img src={Home} alt="home" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/products">
                <img src={Products} alt="products" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/offers">
                <img src={Offer} alt="offer" />
                Best Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                <img src={Blog} alt="blog" />
                Blog
              </NavLink>
            </li>
            <li className="login">
                <NavLink to="/login">
                    <img src={Login} alt="login" />
                    Login
                </NavLink>
            </li>
            <li className="signup">
                <NavLink to="/signup">
                    <img src={User} alt="login" />
                    Signup
                </NavLink>
            </li>
            <li className="social-icons">
                <div className="icons-container">
                    <a href=""><img src={Facebook} alt="facebook"/></a>
                    <a href=""><img src={Twitter} alt="twitter"/></a>
                    <a href=""><img src={Instagram} alt="instagram"/></a>
                    <a href=""><img src={Youtube} alt="youtube"/></a>
                </div>
            </li>
          </ul>
          <div className="shop-logo">
            <Link to="/shop">
              <img src={ShopLogo} alt="shop-logo" />
            </Link>
          </div>
          <div className="mobile-menu" onClick={() => setMobileMenu(true)}>
            <img src={MobileMenu} alt="mobile-menu" />
          </div>
          <div className="icons-container">
            <div className="search">
              <img src={Search} alt="user" />
            </div>
            <div className="login-register">
              <img src={User} alt="search" />
              <span>My Account</span>
            </div>
            <div className="menu">
              <img src={Menu} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavbar;
