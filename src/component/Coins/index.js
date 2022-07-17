import React, { Component } from 'react';
import './index.css';
import lizard from '../../images/icon-lizard.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
const Coins = (props)=>{
 const centerImage = require('../../images/icon-'+props.name+'.svg') ;
 const index ='coin coin'+ props.index;
 return (
     <div className={index} >
        <button className="coin_container" style={{border:`12px solid var(${props.color})`}}>
            <img src={centerImage} 
             alt={props.title}
            />
        </button>
        
     </div>
 )
}
export default Coins;