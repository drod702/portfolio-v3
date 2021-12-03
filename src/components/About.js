import React from 'react';
import './About.css';

import myImage from '../assets/me.jpg';
import Resume from '../assets/ResumeV2.pdf';
import CS50x from '../assets/cs50x.png';
import FCC from '../assets/freecodecamp.png';
import Codecademy from '../assets/codecademy.png';

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-contents">
                <div className="header">
                    <h2 className="header-text">
                        ABOUT ME
                    </h2>
                    <div className="header-bar"></div>
                </div>
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={myImage} alt="myPhoto" />
                        <h5>Get to know me...</h5>
                    </div>
                    <div className="about__me-content">
                        <h5 className="about__me-who">Who am I?</h5>
                        <h4 className="about__me-headline">I'm Frederico "D'kie" Rodriguez, a Frontend Developer, Graphic Designer and CG Artist.</h4>
                        <p>I’m a highly creative and detail oriented Frontend Developer and Graphic Designer / CG Artist for a broad range of clients. Seeking position in a company that appreciates hard work, dedication and evolving technical skills. Please, take a look at my portfolio works.</p>
                        <hr />
                        <h5>Certificates from:</h5>
                        <div className="about__me-certs">
                            <img src={CS50x} alt="" />
                            <img src={FCC} alt="" />
                            <img src={Codecademy} alt="" />
                        </div>
                        <div className='about-social'>
                            <a href='https://www.linkedin.com/in/drod702' target='_blank' rel='noreferrer noopener'>
                                <i className='fab fa-linkedin fa-3x' />
                            </a>
                            <a href='https://github.com/drod702' target='_blank' rel='noreferrer noopener'>
                                <i className='fab fa-github-square fa-3x' />
                            </a>
                            <a href='https://dribbble.com/drod702' target='_blank' rel='noreferrer noopener'>
                                <i className='fab fa-dribbble-square fa-3x' />
                            </a>
                            <a href='https://www.instagram.com/drod702efx/' target='_blank' rel='noreferrer noopener'>
                                <i className='fab fa-instagram fa-3x' />
                            </a>
                        </div>
                        <div className='about__me-btn'>
                            <a href={Resume} download>
                                <button className='btn'>DOWNLOAD RESUME</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
