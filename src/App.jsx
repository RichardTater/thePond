import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
