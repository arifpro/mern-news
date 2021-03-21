import { Route } from "react-router-dom";

// components
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
