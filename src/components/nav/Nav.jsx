import React from 'react';
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineInfoCircle /></a>
      <a href="#services"><BiCodeAlt /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  );
}

export default Nav;
