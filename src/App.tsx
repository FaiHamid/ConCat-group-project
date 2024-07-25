import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <div className="App__container">
          <div className="App__header">
            <Header />
          </div>
          <div className="App__content">
            <Outlet />
          </div>
          <div className='App__footer'>
            {/* Footer */}
          </div>
        </div>
      </div>
    </>
  );
};

