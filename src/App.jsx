import { useState } from "react";
import "./App.css";
import { ReactLenis, useLenis } from 'lenis/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Layout from './components/Layout'; // includes Navbar + Outlet

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <div id="app">
      <ReactLenis root>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> {/* renders Banner + others */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}

export default App;
