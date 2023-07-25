import './topbar.scss'
import { MdMail } from 'react-icons/md';
import {FaUser} from 'react-icons/fa'
import { useState } from 'react';
export default function Topbar({menuopen,setMenuOpen}) {
  
  return (
    
    <div className={'topbar ' + (menuopen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#contact" className='logo'>Josialex.</a>
          <div className="itemcontainer">
            <div className="item">
             <FaUser className='icon'/>
             <span className='span'>+251 926 9080 07</span>
           </div>
           <div className="item">
            <MdMail className='icon'/>
            <span className='span'>yosefale65@gmail.com</span></div>
           </div>
        </div>
        <div className="right">
          <div className="humberger" onClick={()=>setMenuOpen(!menuopen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
