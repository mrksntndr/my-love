import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage';
import OurStory from './pages/OurStory';
import Photos from './pages/Photos';
import Poetry from './pages/Poetry';
import NewBeginning from './pages/NewBeginning';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/new-beginning" element={<NewBeginning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
