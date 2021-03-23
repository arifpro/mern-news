import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/NavbarStyle.module.css";
import MainButton from "../Custom/MainButton";

// icons
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import dribbble from "../../assets/icons/dribbble.png";

// images
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <main className={styles.navbar}>
      <div className={styles.navbar_firstSection}>
        {/* login button */}
        <section className={styles.navbar__accountSection}>
          <Link exact to="/account">
            <MainButton
              text="Account"
              arrow={false}
              width="60px"
              height="20px"
              style={{ fontSize: "10px", fontWeight: "bold" }}
            />
          </Link>
        </section>

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
      </div>

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
