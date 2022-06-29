import React from 'react';
import "./about.css"
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { DiReact } from "react-icons/di";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <BsFillPatchCheckFill size={140} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaUserGraduate className='about_icon' />
              <h5>Graduation</h5>
              <small>Hashemite University - Computer Science</small>
            </article>
            <article className='about_card'>
              <MdWork className='about_icon' />
              <h5>Internship</h5>
              <small>Java Developer at ProgressSoft </small>
            </article>
            <article className='about_card'>
              <DiReact className='about_icon' />
              <h5>Frontend Development</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas repellat consequatur optio consequuntur id dicta ipsum illo suscipit quibusdam eligendi, porro nihil corporis saepe officiis voluptates delectus! Illum, rerum.
          </p>
          <a href="#contact" className='btn btn_primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  );
}

export default About;
