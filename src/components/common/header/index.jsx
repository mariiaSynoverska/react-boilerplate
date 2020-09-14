import React from "react";

import logo from "assets/images/attr_logo.svg";

import styles from "./styles.module.css";

const Header = () => (
  <div className={styles.wrapper}>
    <img src={logo} alt="" />
  </div>
);

export default Header;
