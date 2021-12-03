import React from 'react'
import './Animation.css'
import { anim } from '../constants/anim'
import 'videojs-playlist';
import ReactPlayer from 'react-player/lazy'

const Animation = () => {

    return (
        <div className="animation-container" id="animation">
            <div className="animation-contents">
                <div className="header">
                    <h2 className="header-text">Portfolio</h2>
                    <h5>Motion Graphics / CG Arts</h5>
                    <div className="header-bar"></div>
                </div>
                <div className="vid-player">
                    {anim.map((video) => (
                        <div key={video.id}>
                            <ReactPlayer
                                url={video.source}
                                className='videos'
                                controls={true}
                                width='396px'
                                height='240px'
                                playIcon
                                light={video.image}
                                playing={true}
                            />
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Animation
