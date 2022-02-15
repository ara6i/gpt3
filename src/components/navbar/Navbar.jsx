import React from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assest/images/GPT-3.svg";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.pages}>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#home">What is GPT3</a>
        </p>
        <p>
          <a href="#home">Open AI</a>
        </p>
        <p>
          <a href="#home">Case Studies</a>
        </p>
        <p>
          <a href="#home">Library</a>
        </p>
      </div>
      <div className={styles.sign}>
        <div>
          <button className={styles.signIn}>sign in</button>
        </div>
        <div>
          <button className={styles.signUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
