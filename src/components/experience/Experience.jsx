import React from 'react';
import "./experience.css"
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiJava } from "react-icons/si";
import { DiPhp } from "react-icons/di";
const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <AiFillHtml5 className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className='text_light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <DiCss3 className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className='text_light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <DiJavascript1 className="experience_icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text_light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact className="experience_icon" />
              <div>
                <h4>React</h4>
                <small className='text_light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <RiFlutterFill className="experience_icon" />
              <div>
                <h4>Flutter</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiJava className="experience_icon" />
              <div>
                <h4>Java</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <FaNodeJs className="experience_icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiExpress className="experience_icon" />
              <div>
                <h4>Express</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMongodb className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiFirebase className="experience_icon" />
              <div>
                <h4>Firebase</h4>
                <small className='text_light' >Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <GrMysql className="experience_icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text_light' >Begginer</small>
              </div>
            </article>
            <article className='experience_details'>
              <DiPhp className="experience_icon" />
              <div>
                <h4>PHP</h4>
                <small className='text_light' >Begginer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
