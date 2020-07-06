import React, { Component } from 'react'
import Phone from '../assets/images/phone.svg'
import Location from '../assets/images/location.svg'
import LogoFacebook from '../assets/images/logo-facebook.svg'
import LogoTwitter from '../assets/images/logo-twitter.svg'
import LogoTelegram from '../assets/images/logo-telegram.svg'
import Linkedin from '../assets/images/linkedin-logo.svg'
import LogoGithub from '../assets/images/logo-github.svg'

class FooderController extends Component {

    render() {
        return (
            <div id="fooder">
                <div className="container">
                    <div className="waper">
                        <div className="group">
                            <p style={{ fontSize: '32px', fontWeight: 'bold' }}>EMPOW</p>
                            <p style={{ width: '350px' }}>Empow is a chain of decentralized products and services, built on Blockchain technology. With superior features and utilities, it helps to overcome the existing limitations of the previous generation's Blockchain and makes all transactions safe, transparent, secure, with friendly interface and easy to use.</p>
                            <div className="waper-logo">
                                <a className="logo" href="https://www.facebook.com/pg/Empowofficial" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoFacebook} alt="photos"></img>
                                </a>
                                <a className="logo" href="https://twitter.com/EmpowNetwork" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoTwitter} alt="photos"></img>
                                </a>
                                <a className="logo" href="http://linkedin.com/company/empow-io" target="_blank" rel="noopener noreferrer">
                                    <img style={{ width: '12px', height: '12px' }} src={Linkedin} alt="photos"></img>
                                </a>
                                <a className="logo" href="https://t.me/heaven_book" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoTelegram} alt="photos"></img>
                                </a>
                                <a className="logo" href="https://medium.com/@business_44456" target="_blank" rel="noopener noreferrer">
                                    <p>M</p>
                                </a>
                                <a className="logo" href="https://github.com/empow-blockchain?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <img style={{ width: '12px', height: '12px' }} src={LogoGithub} alt="photos"></img>
                                </a>
                            </div>
                        </div>
                        <div className="group">
                            <p className="title">About Us</p>
                            <a href="/faq" target="_blank">Question</a>
                            <p>News</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <a href="https://t.me/heaven_book" target="_blank" rel="noopener noreferrer">Help & Support</a>
                        </div>
                        <div className="group">
                            <p className="title">Resource</p>
                            <a href="/WHITEPAPER.pdf" target="_blank">Whitepaper</a>
                            <p>Our clients</p>
                        </div>
                        <div className="group">
                            <p className="title">Contact</p>
                            <div className="child">
                                <img src={Phone} alt="photos"></img>
                                <p>business@empow.io</p>
                            </div>
                            <div className="child">
                                <img src={Location} alt="photos"></img>
                                <a href="https://t.me/heaven_book" target="_blank" rel="noopener noreferrer">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '100px', marginBottom: '20px' }}>© 2019 all rights reserved</p>
                </div>
            </div>
        )
    }

}

export default FooderController