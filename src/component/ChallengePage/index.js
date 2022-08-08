import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './index.css';
import hexagon from '../../images/bg-pentagon.svg'
import { useNavigate } from "react-router-dom";
import Coins from '../../component/Coins';
const ChallengePage = ()=>{
    const navigate = useNavigate();
 return (
     <div className="challengePage">
          <div className="container"
          style= {{
            width:"100%", 
            height:"100%",
            display:"grid",
            justifyContent:"center",
            alignItems:"center",
            backgroundSize:"contain",
            backgroundRepeat: "no-repeat",
            background: `url(${hexagon}) no-repeat center` 
          }}
          >
           <Coins  index="1" name="scissors"color="--ScissorsGradient" title="scissors-section"/>
           <Coins  index="2" name="spock"color="--Cyan" title="spock-section"/>
           <Coins  index="3" name="paper" color="--PaperGradient"title="paper-section"/>
           <Coins  index="4" name="lizard" color="--LizardGradient"title="lizard-section"/>
           <Coins  index="5" name="rock" color="--RockGradient"title="rock-section"/>
          </div>
    
     </div>
 )
}
export default ChallengePage;