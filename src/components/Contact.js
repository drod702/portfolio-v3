import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './Contact.css';

import QRCode from '../assets/drod702QR.png'

const Result = () => {
    return (
        <p>Thank you. Your message has been successfully submitted. I'll reply to you soon.</p>
    )
}

init("user_a6a0G04UNZLEcDBZdEyD1");

const Contact = () => {

    const [result, setResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ev5cid5', 'gmail', e.target, 'user_a6a0G04UNZLEcDBZdEyD1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };

    setTimeout(() => {
        setResult(false)
    }, 3000)

    return (
        <div className="contact-container" id="contact">
            <div className="contact-contents">
                <div className="header">
                    <h2 className="header-text">Contact Me</h2>
                    <h5>Ask me more or just say Hello!</h5>
                    <div className="header-bar"></div>
                </div>
                <div className="contact-form">
                    <div className="contact-info">
                        <h5>Address</h5>
                        <span>Las Vegas, NV</span>
                        <hr />
                        <h5>Phone No.</h5>
                        <span>702.292.8678</span>
                        <hr />
                        <div className="contact-icons">
                        <div className='contact-social'>
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
                        <div className="qr-code">
                            <img src={QRCode} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="form-body">
                        <form action='' onSubmit={sendEmail}>
                            <div className="formWord">
                                <span>Full Name</span>
                                <br />
                                <input
                                    type="text" required
                                    className='input100'
                                    name='fullName'
                                    placeholder='Full Name'
                                />
                                <br />
                                <span>Phone Number</span>
                                <br />
                                <input
                                    type="number" required
                                    className="input100"
                                    name='phone'
                                    placeholder='Contact Number'
                                />
                                <br />
                                <span>Enter Email</span>
                                <br />
                                <input
                                    type="text" required
                                    className="input100"
                                    name='email'
                                    placeholder='Email Address'
                                />
                                <br />
                                <span>Message</span>
                                <br />
                                <textarea required name="message" placeholder='Enter Message...'></textarea>
                                <br />
                                <button>SUBMIT</button>
                                <div className="row">
                                    {result ? <Result /> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
