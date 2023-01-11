import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from "./pages/Acceuil";
import Drift from './pages/Drift';
import Err404 from './pages/Err404';
import Wrc from './pages/Wrc';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil />} />
        <Route path='/drift' element={<Drift />} />
        <Route path='/wrc' element={<Wrc />} />
        <Route path='*' element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;