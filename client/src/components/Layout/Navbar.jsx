import styles from "../../styles/NavbarStyle.module.css";
import { NavLink } from "react-router-dom";

// icons
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import dribbble from "../../assets/icons/dribbble.png";

// images
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
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
          <NavLink exact to="/" activeClassName={styles.selected}>
            Home
          </NavLink>
          <NavLink exact to="/work" activeClassName={styles.selected}>
            Work
          </NavLink>
          <NavLink exact to="/about" activeClassName={styles.selected}>
            About
          </NavLink>
          <NavLink exact to="/blog" activeClassName={styles.selected}>
            Blog
          </NavLink>
          <NavLink exact to="/contact" activeClassName={styles.selected}>
            Contact
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
