import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main.js";
export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <div className="front-card"></div>
          <div className="back-card"></div>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
