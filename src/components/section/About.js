import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import imgs from "../../Professional-Picture-Me.jpeg"
import "../../styles/no-touch.min.css"
const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 offset-md-1 col-md-6 about">
                <h1 id="About" className="red-line">About me</h1>
                <img src={imgs} className='about-img' alt='me'/>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            </div>
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
        </div>
    )
}

export default About
