import styles from "../../styles/NavbarStyle.module.css";
import { NavLink } from "react-router-dom";

// icons
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import dribbble from "../../assets/icons/dribbble.png";

// images
import logo from "../../assets/logo/logo.png";

const Navbar = (props) => {
  return (
    <main className={styles.navbar}>
      {/* icons */}
      <section className={styles.navbar__iconsSection}>
        <ul className={styles.navbar__icons}>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={dribbble} alt="dribbble" />
          </li>
        </ul>
      </section>

      {/* logo */}
      <section className={styles.navbar__logoSection}>
        <img src={logo} alt="logo" />
      </section>

      {/* nav items */}
      <section className={styles.navbar__navItemsSection}>
        <div className={styles.navbar__navItems}>
          <NavLink
            exact
            to="/"
            activeClassName={props.match.path === "/" && styles.selected}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/work"
            activeClassName={props.match.path === "/work" && styles.selected}
          >
            Work
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName={props.match.path === "/about" && styles.selected}
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/blog"
            activeClassName={props.match.path === "/blog" && styles.selected}
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeClassName={props.match.path === "/contact" && styles.selected}
          >
            Contact
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
