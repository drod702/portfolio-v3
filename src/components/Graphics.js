import React from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./Graphics.css";
import Dragon from '../images/dragon.jpg';
import Rave from '../images/rave.jpg';
import Bike from '../assets/bikerace.jpg';
import Hands from '../assets/michaelangelo.jpg';
import Gel from '../assets/gel.jpg';
import Poster from '../assets/wowPoster.jpg';

class Graphics extends React.Component {
    state = {
        open: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    // state = {
    //     open2: false
    // };
    onOpenModal2 = () => {
        this.setState({ open2: true });
    };
    onCloseModal2 = () => {
        this.setState({ open2: false });
    };
    
    onOpenModal3 = () => {
        this.setState({ open3: true });
    };
    onCloseModal3 = () => {
        this.setState({ open3: false });
    };
    
    onOpenModal4 = () => {
        this.setState({ open4: true });
    };
    onCloseModal4 = () => {
        this.setState({ open4: false });
    };
    
    onOpenModal5 = () => {
        this.setState({ open5: true });
    };
    onCloseModal5 = () => {
        this.setState({ open5: false });
    };
    
    onOpenModal6 = () => {
        this.setState({ open6: true });
    };
    onCloseModal6 = () => {
        this.setState({ open6: false });
    };

    render() {
        const { open } = this.state;
        const { open2 } = this.state;
        const { open3 } = this.state;
        const { open4 } = this.state;
        const { open5 } = this.state;
        const { open6 } = this.state;

        return (
            <div className="graphics-container" id="graphics">
                <div className="graphics-contents">
                    <div className="header">
                        <h2 className="header-text">Portfolio</h2>
                        <h5>Graphic Design</h5>
                        <div className="header-bar"></div>
                    </div>
                
                <div className="angry-grid">
                    <div id="item-0" onClick={this.onOpenModal}></div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <img src={Dragon} alt='' width='100%' />
                    </Modal>
                    <div id="item-1" onClick={this.onOpenModal2}></div>
                    <Modal open={open2} onClose={this.onCloseModal2} center>
                        <img src={Rave} alt='' width='100%' />
                    </Modal>
                    <div id="item-2" onClick={this.onOpenModal3}></div>
                    <Modal open={open3} onClose={this.onCloseModal3} center>
                        <img src={Bike} alt='' width='100%' />
                    </Modal>
                    <div id="item-4" onClick={this.onOpenModal4}></div>
                    <Modal open={open4} onClose={this.onCloseModal4} center>
                        <img src={Hands} alt='' width='100%' />
                    </Modal>
                    <div id="item-5" onClick={this.onOpenModal5}></div>
                    <Modal open={open5} onClose={this.onCloseModal5} center>
                        <img src={Gel} alt='' width='100%' />
                    </Modal>
                    <div id="item-6" onClick={this.onOpenModal6}></div>
                    <Modal open={open6} onClose={this.onCloseModal6} center>
                        <img src={Poster} alt='' width='100%' />
                    </Modal>
                </div>
                </div>
            </div>
        );
    }
}

export default Graphics;
