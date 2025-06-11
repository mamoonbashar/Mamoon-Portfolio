import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../assets/Mark.svg";
import BurgerIcon from "../assets/mi_menu.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className={styles.Navbar}>
        <section className={styles.LogoContainer}>
          <img src={Logo} alt="logo" />
        </section>
        <section className={styles.NavbarOptions}>
          <NavLink
            to="/"
            className={styles.NavLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`${styles.NavLink} ${styles.FirstLink}`}
          >
            About
          </NavLink>
          <NavLink to="/portfolio" className={styles.NavLink}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={styles.NavLink}>
            Contact
          </NavLink>
          <section className={styles.BurgerIconContainer}>
            <img src={BurgerIcon} alt="burgerIcon" />
          </section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
