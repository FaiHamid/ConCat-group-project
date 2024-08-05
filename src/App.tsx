
import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

import classNames from 'classnames';
import { useTheme } from './contexts/ThemeContext';

import './i18n/i18n';


export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", {
      "lightTheme": theme === 'light',
      "darkTheme": theme === 'dark',
      })}
    >
      <div className="App__container">
        <div className="App__header">
          <Header />
        </div>
        <div id="page-top" className="App__content">
          <Outlet />
        </div>
        <div className="App__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};