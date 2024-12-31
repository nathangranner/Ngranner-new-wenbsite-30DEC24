import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About/About';
import { Performances } from './components/Performances/Performances';
import { Gallery } from './components/Gallery/Gallery';
import { Blog } from './components/Blog/Blog';
import { Media } from './components/Media/Media';
import { Contact } from './components/Contact/Contact';
import { RolePage } from './components/Performances/RolePage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Performances />
      <Gallery />
      <Blog />
      <Media />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roles/:slug" element={<RolePage />} />
      </Routes>
    </Router>
  );
}