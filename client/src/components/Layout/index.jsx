import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/LayoutStyle.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from "../Auth/Login";

// images & icons
import logo from "../../assets/logo/logo.png";
import { IoHome, IoExtensionPuzzle } from "react-icons/io5";
import { FaBloggerB, FaUserAlt } from "react-icons/fa";
import { SiWheniwork } from "react-icons/si";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiInfo } from "react-icons/ti";

const Layout = (props) => {
  const [visible, setVisible] = useState(false);
  const [viewLoginModal, setViewLoginModal] = useState(false);

  return (
    <div>
      {/* menubar */}
      <section className={styles.menubar}>
        <FaUserAlt onClick={() => setViewLoginModal(true)} />
        <img src={logo} alt="logo" height="30px" />
        <SiWheniwork onClick={() => setVisible(!visible)} />
      </section>

      <Login
        viewLoginModal={viewLoginModal}
        setViewLoginModal={setViewLoginModal}
      />

      {visible && (
        <div className={styles.sidenav}>
          <NavLink exact to="/" activeClassName={styles.selected}>
            <IoHome />
            Home
          </NavLink>
          <NavLink exact to="/work" activeClassName={styles.selected}>
            <IoExtensionPuzzle />
            Work
          </NavLink>
          <NavLink exact to="/about" activeClassName={styles.selected}>
            <TiInfo />
            About
          </NavLink>
          <NavLink exact to="/blog" activeClassName={styles.selected}>
            <FaBloggerB />
            Blog
          </NavLink>
          <NavLink exact to="/contact" activeClassName={styles.selected}>
            <RiContactsBook2Fill />
            Contact
          </NavLink>
        </div>
      )}
      <div onClick={() => setVisible(false)}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
