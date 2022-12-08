import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Champions from './components/Champions';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Support from './components/Support';
import NotFoundPage from './components/NotFoundPage';
import WildRift from './components/WildRift';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='champions' element={<Champions/>} />
        <Route path='wild-rift' element={<WildRift />} />
        <Route path='support' element={<Support />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
