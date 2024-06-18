import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./Components/Write";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={ <Write />} />
          <Route path="/write" element={ <Write />} />
          <Route path="/Read" element={ <Read />} />
          <Route path="/Update/:uid" element={ <Update />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
