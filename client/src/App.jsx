import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Scroll to element when navigating to a hash (e.g. /#projects)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Delay slightly to allow route content to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      // If no hash, scroll to top on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* TODO: Will add Navbar to entire route in the near future */}
      <NavBar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/home" element={null} /> */}
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
