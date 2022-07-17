import React, { Component, useState } from 'react';
import './index.css';
import close from '../../images/icon-close.svg'
const RulesButton = ()=>{
    const [rules,setRules] = useState(false);
 return (
     <div className="btn-rules-space">
         <button className="btn-rules" onClick={()=>setRules(!rules)}>rules</button>
         <div 
            style={{display: rules ? "flex" : "none" }}
            className="rules-block"
        >
            <div className="rule_modal_header">
               <span className="rules_header">Rules</span>
               <span className="rules_close"><img  onClick={()=>setRules(!rules)} src={close} alt="close"/></span>
            </div>
            <div className="rules_image_container">
             <span className="rules_image"></span>
            </div>
        </div>
     
     </div>
    
 )
}
export default RulesButton;