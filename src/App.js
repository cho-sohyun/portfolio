import "./App.css";
import { Main } from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {" "}
      {/* basename 추가 */}
      <Main />
    </Router>
  );
}
export default App;
