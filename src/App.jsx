import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

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
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // show loader first
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
