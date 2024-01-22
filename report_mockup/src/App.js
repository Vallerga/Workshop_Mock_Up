import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
