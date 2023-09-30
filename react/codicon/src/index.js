import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bigbang from './pages/bigbang';
import Stars from './pages/stars'
import Kepler90c from './pages/kepler90c';
import SSSistema from './pages/sistemalinks';
import Blackhole from './pages/blackhole';
import Kepler90g from './pages/kepler90g';
import Kepler90b from './pages/kepler90b';
import Kepler90d from './pages/kepler90d';
import Kepler90e from './pages/kepler90e';
import Kepler90f from './pages/kepler90f';
import Kepler90h from './pages/kepler90h';
import Kepler90i from './pages/kepler90i';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bigbang />}  />
        <Route path="/stars" element={<Stars />}  />
        <Route path="/kepler90c" element={<Kepler90c />}  />
        <Route path="/system" element={<SSSistema />}  />
        <Route path="/black" element={<Blackhole />}  />
        <Route path="/kepler90g" element={<Kepler90g />}  />
        <Route path="/kepler90b" element={<Kepler90b />}  />
        <Route path="/kepler90d" element={<Kepler90d />}  />
        <Route path="/kepler90e" element={<Kepler90e />}  />
        <Route path="/kepler90f" element={<Kepler90f />}  />
        <Route path="/kepler90h" element={<Kepler90h />}  />
        <Route path="/kepler90i" element={<Kepler90i />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
