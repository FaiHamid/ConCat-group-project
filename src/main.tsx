import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { CartPage } from './modules/CartPage';
import { About } from './modules/About';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { Catalog } from './modules/Catalog';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to={'/'} />} />

            <Route path="phones/:itemId" element={<About />} />
            <Route path="phones" element={<Catalog />}/>

            <Route path="tablets/:itemId" element={<About />} />
            <Route path="tablets" element={<Catalog />} />

            <Route path="accessories/:itemId" element={<About />} />
            <Route path="accessories" element={<Catalog />} />

            <Route path="favorites" element={<h1>Favorites</h1>} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  </Router>,
);
