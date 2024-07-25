import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to={'/'} />} />

        <Route path="phones" element={<h1>Phones</h1>}>
          <Route path=":phoneId?" element={<h1>PhonesItems</h1>} />
        </Route>

        <Route path="tablets" element={<h1>Tablets</h1>}>
          <Route path=":tabletId?" element={<h1>TabletsItems</h1>} />
        </Route>

        <Route path="accessories" element={<h1>Acсessories</h1>}>
          <Route path=":accesorieId?" element={<h1>AcсessoriesItems</h1>} />
        </Route>

        <Route path="favorites" element={<h1>Favorites</h1>} />
        <Route path="cart" element={<h1>Cart</h1>} />
        <Route path="*" element={<h1>NotFoundPage</h1>} />
      </Route>
    </Routes>
  </Router>);
