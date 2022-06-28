import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Scoials = () => {
  return (
    <div className='socials'>
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="http://facebook.com" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
}

export default Scoials;
