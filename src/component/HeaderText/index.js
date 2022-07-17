import React, { Component, useState } from 'react';
import './index.css';
import Logo from '../../images/logo';
import headerlogo from '../../images/logo-bonus.svg';
const HeaderText = ()=>{
 return (
     <div className="headtext">
       {/* <Logo/> */}
      <h1><img className="headerLogo" src={headerlogo}  alt="logo"/></h1> 
     </div>
 )
}
export default HeaderText;