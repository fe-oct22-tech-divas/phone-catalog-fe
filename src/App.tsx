import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/shared/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/phones">Phones</Link>
      </nav>
      <div className="starter">
      </div>
    </>
  );
};
