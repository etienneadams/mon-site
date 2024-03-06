import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './front/pages/home.tsx';
import GamePage from './front/pages/games.tsx';
import ContactPage from './front/pages/contact.tsx';
import MorpionGamePage from './front/pages/jeux/morpion.tsx';
import Puissance4GamePage from './front/pages/jeux/puissance4.tsx';
import PenduGamePage from './front/pages/jeux/pendu.tsx';
import DemineurGamePage from './front/pages/jeux/demineur.tsx';
import ParcoursPage from './front/pages/parcours.tsx';
import TravleGamePage from './front/pages/jeux/travle.tsx';
import SudokuGamePage from './front/pages/jeux/sudoku.tsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/mon-site" />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/parcours" element={<ParcoursPage />} />
        <Route path="/jeux" element={<GamePage />} />
        <Route path="/Morpion" element={<MorpionGamePage />} />
        <Route path="/Puissance 4" element={<Puissance4GamePage />} />
        <Route path="/Pendu" element={<PenduGamePage />} />
        <Route path="/Demineur" element={<DemineurGamePage />} />
        <Route path="/Travle" element={<TravleGamePage />} />
        <Route path="/Sudoku" element={<SudokuGamePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
