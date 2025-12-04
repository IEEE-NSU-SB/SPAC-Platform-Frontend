import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Timeline from "./Timeline";
import Speakers from "./Speakers";
import Ambassadors from "./Ambassadors";
import Registration from "./Registration";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./scrollToTop";

import SpacLoader from "./SpacLoader"; // <-- your loader

const App = () => {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all assets (images, CSS, fonts) to load
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Show loader until all assets are fully loaded
  if (loading) return <SpacLoader />;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
