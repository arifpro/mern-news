import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
