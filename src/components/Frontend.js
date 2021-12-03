import React from 'react';
import './Frontend.css';
import { frontend } from '../constants/frontend';

const Frontend = () => {
    return (
        <div className="frontend-container" id="frontend">
            <div className="frontend-contents">
                <div className="header">
                    <h2 className="header-text">
                        Portfolio
                    </h2>
                    <h5> 
                        Frontend Development
                    </h5>
                    <div className="header-bar"></div>
                </div>
                <div className='gridContainer'>
                    {frontend.map((project) => (
                        <div className='blogCard' key={project.id}>
                            <img className='portImg' src={project.image} alt='' />
                            <div className='titleContent'>
                                <h3 className='headerThree'>{project.title}</h3>
                                <hr />
                            </div>
                            <p className="cardInfo">{project.description}</p>
                            <div>
                                <div className="titleContent">
                                    STACK
                                </div>
                                <ul className="tagList">
                                    {project.tags.map((tag, i) => (
                                        <li className="tag" key={i}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <ul className="utilityList">
                                <a href={project.visit} className='externalLinks'> VISIT</a>
                                {/* <a href={project.source} className='externalLinks'> SOURCE</a> */}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Frontend
