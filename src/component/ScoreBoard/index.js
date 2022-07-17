import React, { Component } from 'react';
import './index.css';
import HeaderText from '../HeaderText';
import ScoreCard from '../ScoreCard';
const ScoreBoard = ()=>{
 return (
     <div className="HeadCard">
        <HeaderText/>
        <ScoreCard/>
     </div>
 )
}
export default ScoreBoard;