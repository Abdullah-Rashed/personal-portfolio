import React, { useState } from 'react';
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  const detectActive = (e) => {
    setActiveNav(e.currentTarget.id)
  }

  return (
    <nav>
      <a id='#' href="#" className={activeNav === "#" ? "active" : ""} onClick={detectActive}><AiOutlineHome /></a>
      <a id='#about' href="#about" className={activeNav === "#about" ? "active" : ""} onClick={detectActive}><AiOutlineUser /></a>
      <a id='#experience' href="#experience" className={activeNav === "#experience" ? "active" : ""} onClick={detectActive}><AiOutlineInfoCircle /></a>
      <a id='#services' href="#services" className={activeNav === "#services" ? "active" : ""} onClick={detectActive}><BiCodeAlt /></a>
      <a id='#contact' href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={detectActive}><AiOutlineMail /></a>
    </nav>
  );
}

export default Nav;
