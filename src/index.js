import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import GamePage from './component/GamePage';
import ChallengePage from './component/ChallengePage';
import RulesButton from './component/RulesButton';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App/>
      <Routes>
        <Route path="/RockPaperScissor" element={<ChallengePage />} />
        <Route path="GamePage" element={<GamePage />} />
      </Routes>
      </BrowserRouter>
      <RulesButton/>
  </React.StrictMode>
);

