import React from "react";
import "./Home.css";
import Typical from 'react-typical';

const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="home-content">
                <h1 className="home-name">
                    Hi, I'm Frederico "D'kie" Rodriguez
                </h1>
                <h3 className="home-subText">
                    <Typical
                        steps={[
                            'I\'m a Frontend Developer',
                            2500,
                            'I\'m a Graphics Designer',
                            2500,
                            'I\'m a CG Artist',
                            2500
                        ]}
                        loop={Infinity}
                    /></h3>
                <div className='home-social'>
                    <a href='https://www.linkedin.com/in/drod702' target='_blank' rel='noreferrer noopener'>
                        <i className='fab fa-linkedin fa-2x' />
                    </a>
                    <a href='https://github.com/drod702' target='_blank' rel='noreferrer noopener'>
                        <i className='fab fa-github-square fa-2x' />
                    </a>
                    <a href='https://dribbble.com/drod702' target='_blank' rel='noreferrer noopener'>
                        <i className='fab fa-dribbble-square fa-2x' />
                    </a>
                    <a href='https://www.instagram.com/drod702efx/' target='_blank' rel='noreferrer noopener'>
                        <i className='fab fa-instagram fa-2x' />
                    </a>
                </div>
                <div className='home__content-btn'>
                    <a href="#frontend"><button className='btn'>
                        View my Work  <i className='fas fa-chevron-right'></i>
                    </button></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
