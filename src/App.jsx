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

import SpacLoader from "./SpacLoader";
import TopScroll from "./TopScroll";
import Error404 from "./Error404";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let done = false;

    // 💠 Function that safely ends loading
    const finishLoading = () => {
      if (!done) {
        done = true;
        setLoading(false);
      }
    };

    // 💠 CASE 1: If page already loaded (common on mobile)
    if (document.readyState === "complete") {
      finishLoading();
    }

    // 💠 CASE 2: Listen for full window load
    window.addEventListener("load", finishLoading);

    // 💠 CASE 3: Fallback in case load event is skipped
    const failSafe = setTimeout(finishLoading, 1200);

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(failSafe);
    };
  }, []);

  // Show loader until loading is finished
  if (loading) return <SpacLoader />;

  return (
    <BrowserRouter>
      <TopScroll />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
