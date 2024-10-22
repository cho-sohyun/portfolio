import "./App.css";
import { Main } from "./components/Main";
import ScrollTop from "./utils/scrollTop";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Main />
    </Router>
  );
}
export default App;
