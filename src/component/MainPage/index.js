import React, { Component } from 'react';
import ScoreBoard from '../ScoreBoard';
import ChallengePage from '../ChallengePage';
import './index.css';
import { Outlet, Link } from "react-router-dom";

const MainPage = ()=>{
 return (
     <div className="game">
        <ScoreBoard/>
     </div>
 )
}
export default MainPage;