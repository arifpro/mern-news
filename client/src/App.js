import { Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
};

export default App;
