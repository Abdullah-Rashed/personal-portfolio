import React from 'react';
import CTA from './CTA';
import "./header.css"
import { FaCode } from "react-icons/fa";
import Scoials from './Scoials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Abdullah Rashed</h1>
        <h5 className="text_light">Fullstack Developer</h5>
        <CTA />
        <Scoials />
        <div className="me">
          <FaCode size={140} />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
