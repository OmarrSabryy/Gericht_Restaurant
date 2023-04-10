import React, { useState } from "react";
import classes from "./navbar.module.css";
import { images } from "../../exports";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Backdrop } from "../../components";
const Menu = () => (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#3">Menu</a>
    </li>
    <li>
      <a href="#4">Awards</a>
    </li>
    <li>
      <a href="#5">Contact</a>
    </li>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className={classes["gericht__navbar"]}>
        <div className={classes["gericht__navbar-image"]}>
          <img src={images.logo} alt="logo" />
        </div>
        <nav className={classes["gericht__navbar-navigation"]}>
          <ul className={classes["gericht__navbar-navigation_links"]}>
            <Menu />
          </ul>
        </nav>
        <div className={classes["gericht__navbar-actions"]}>
          {!toggleMenu && (
            <>
              <button>Log in / Register</button>
              <div className={classes["gericht__navbar-actions_bar"]}></div>
              <button>Book Table</button>
            </>
          )}
          <div className={classes["gericht__navbar-actions_dropdown"]}>
            {toggleMenu ? (
              <CgClose onClick={toggleMenuHandler} />
            ) : (
              <GiHamburgerMenu onClick={toggleMenuHandler} />
            )}
          </div>
        </div>
      </div>
      {toggleMenu && (
        <Backdrop className="slide-bottom">
          <ul
            className={classes["gericht__navbar-actions_dropdown-layout-links"]}
          >
            <Menu />
            <button>Log in / Register</button>
            <button>Book Table</button>
          </ul>
        </Backdrop>
      )}
    </>
  );
};

export default Navbar;
