import { useState } from "react";
import styles from "../../styles/LayoutStyle.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

// images & icons
import logo from "../../assets/logo/logo.png";
import {
  IoHome,
  IoExtensionPuzzle,
  IoInformationCircle,
} from "react-icons/io5";
import { SiWheniwork } from "react-icons/si";
import { FaBloggerB } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiThMenu, TiInfo } from "react-icons/ti";
// import { BiMenuAltRight } from "react-icons/bi";
// import { CgMenuHotdog } from "react-icons/cg";

const Layout = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* menubar */}
      <section className={styles.menubar}>
        <img src={logo} alt="logo" height="30px" />
        {/* <TiThMenu onClick={() => setVisible(!visible)} /> */}
        <SiWheniwork onClick={() => setVisible(!visible)} />
        {/* <p>
          <BiMenuAltRight />
          <CgMenuHotdog />
          <span>Menu</span>
        </p> */}
      </section>

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
