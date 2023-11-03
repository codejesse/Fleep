import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import Footer from './components/Footer';
import { Route, Link, Routes } from 'react-router-dom';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      {/* <Header />
      <Hero />
      <Search />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="homes/:homeId" element={<PropertyDetails />} />
      </Routes>
    </>
  )
};

export default App;
