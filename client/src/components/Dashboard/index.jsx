import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/DashboardStyle.module.css";

// images & icons
import logo from "../../assets/logo/logo.png";
import { BiLogOutCircle } from "react-icons/bi";
import { FaBloggerB, FaUserCircle } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const Dashboard = (props) => {
  return (
    <>
      {/* menubar */}
      <section className={styles.menubar}>
        <Link exact to="/">
          <img src={logo} alt="logo" height="30px" />
        </Link>
        <FaUserCircle />
      </section>

      <section className={styles.sidenav}>
        {/* nav items */}
        <NavLink
          exact
          to={"/dashboard" || "/dashboard/news"}
          activeClassName={styles.selected}
        >
          <IoNewspaper />
          News
        </NavLink>
        <NavLink exact to="/dashboard/blogs" activeClassName={styles.selected}>
          <FaBloggerB />
          Blogs
        </NavLink>

        {/* logout */}
        <Link
          exact
          to="/"
          onClick={() => localStorage.removeItem("jwt")}
          className={styles.logout}
        >
          <BiLogOutCircle />
          Logout
        </Link>
      </section>

      <section className={styles.content}>{props.children}</section>
    </>
  );
};

export default Dashboard;
