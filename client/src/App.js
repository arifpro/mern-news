import {
  // Redirect,
  Route,
} from "react-router-dom";

// components
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { LoginDiv } from "./components/Auth/Login";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/account">
        <Layout>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5rem 0",
            }}
          >
            <LoginDiv />
          </div>
        </Layout>
      </Route>

      {/* <Redirect to="/" /> */}
    </>
  );
};

export default App;
