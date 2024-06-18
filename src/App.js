import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./Components/Write";
import Read from "./Components/Read";
import UpdateRead from "./Components/UpdateRead";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={ <Write />} />
          <Route path="/write" element={ <Write />} />
          <Route path="/read" element={ <Read />} />
          <Route path="/UpdateRead" element={ <UpdateRead />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
