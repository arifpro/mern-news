import { Route } from "react-router-dom";

// components
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/work" component={Home} />
      <Route exact path="/about" component={Home} />
      <Route exact path="/blog" component={Home} />
      <Route exact path="/contact" component={Home} /> */}
    </div>
  );
};

export default App;
