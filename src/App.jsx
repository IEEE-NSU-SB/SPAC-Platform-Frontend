import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Home from "./Home"
import Timeline from "./Timeline"
import Speakers from "./Speakers"
import Ambassadors from "./Ambassadors"
import Registration from "./Registration"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollToTop from "./scrollToTop"

const App = () => {
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
  )
}

export default App
