import React, { Component } from 'react';
import './index.css';
import lizard from '../../images/icon-lizard.svg'
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import scissors from '../../images/icon-scissors.svg'
import spock from '../../images/icon-spock.svg'
import {useDispatch, useSelector} from 'react-redux';
import { pickedDataAction } from '../../store/action';
import { useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';
const Coins = (props)=>{
 const centerImage = require('../../images/icon-'+props.name+'.svg') ;
 const index ='coin coin'+ props.index;
 const dispatch = useDispatch();
 const data = useSelector((state)=> state.data.fullData);
 const navigate = useNavigate();
 const handleUserValue = (e)=>{
     console.log(e)
     if(e === "challengePage"){
        const { color,index ,name ,title} = props
        dispatch(pickedDataAction.pickedValue({ color,index ,name ,title}))
        navigate("/GamePage")
     }
 }
 return (
     <div className={index} >
        <button className="coin_container" onClick={ handleUserValue("challengePage")}
        style={{border:`12px solid var(${props.color})`}}>
            <img src={centerImage} 
             alt={props.title}
            />
        </button>
        
     </div>
 )
}
export default Coins;