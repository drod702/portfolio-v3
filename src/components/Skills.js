import React from 'react';
import './Skills.css';
import Frontend from '../assets/frontEnd.png';
import CGarts from '../assets/cgArt.png';
import Design from '../assets/digitalArt.png';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-contents">
                <div className="header">
                    <h2 className="header-text">
                        My Skills
                    </h2>
                    <div className="header-bar"></div>
                    <p>I am a creative person who solves problems visually. I use multiple tools based from my the knowledge gained in experience, ranging from print media, frontend development and animation / motion graphics.</p>
                </div>
                <div className="skills-avail">
                    <div className="card">
                        <img src={Frontend} alt="Avatar" />
                        <div className ="card-container">
                            <h4><b>Frontend Development</b></h4>
                            <p>The look and feel of are one of the important elements to any project. I use HTML, CSS, Javascript. I also utilize different technologies like React JS, Bootstrap and JQuery.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Design} alt="Avatar" />
                        <div className ="card-container">
                            <h4><b>Graphics Design</b></h4>
                            <p>I prefer to see things not as they are but as they could be. I'm a problem solver with a keen interest in contributing through design. I use Adobe Creative Cloud as my tool of choice.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CGarts} alt="Avatar" />
                        <div className="card-container">
                            <h4><b>Motion Graphics / CG Arts</b></h4>
                            <p>With a sharp eye for detail and high creative flair, I enjoy designing and making things move. I developed my skills in motion graphics through experience and knowledge in various 3D softwares. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
