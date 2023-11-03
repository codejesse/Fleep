import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="homes/:homeId" element={<PropertyDetails />} />
      </Routes>
    </>
  )
};

export default App;
