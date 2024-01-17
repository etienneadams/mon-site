import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './front/pages/home.tsx';
import GamePage from './front/pages/games.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/accueil" />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/jeux" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
