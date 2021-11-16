import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/movie/:id" />
        <Route element={<h1>hello</h1>} path="/hello" />
      </Routes>
    </Router>
  );
}

export default App;
