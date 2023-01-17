import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drift from './pages/Drift';
import Err404 from './pages/Err404';
import Freeroam from './pages/Freeroam';
import Wrc from './pages/Wrc';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Drift />} />
        <Route path='/wrc' element={<Wrc />} />
        < Route path='/freeroam' element={<Freeroam />} />
        <Route path='*' element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;