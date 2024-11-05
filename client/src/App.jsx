import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Auth />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
