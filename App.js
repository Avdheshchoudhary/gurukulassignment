import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Components/Home'; 
import Registration from './Components/MyForm'; 
import Login from './Components/Login'; 
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
