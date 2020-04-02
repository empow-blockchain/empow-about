import React, { Component } from 'react'
import IconVi from '../assets/images/icon-vi.svg'
import IconMobile from '../assets/images/icon-mobile.svg'
import IconClose from '../assets/images/icon-close.svg'
import $ from 'jquery'
import LogoTelegram from '../assets/images/logo-telegram.svg'
import LogoTwitter from '../assets/images/logo-twitter.svg'
import LogoFacebook from '../assets/images/logo-facebook.svg'
import LogoGithub from '../assets/images/logo-github.svg'
import Linkedin from '../assets/images/linkedin-logo.svg'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false
        }
    };

    componentDidMount() {
        if (this.props.color === '#46A228') {
            $(".header li").css("color", this.props.color);
            $(".header a").css("color", this.props.color);
            $(".header p").css("color", this.props.color);
        }

        if (this.props.pathname === '/roadmap') {
            $("html").animate({ scrollTop: 1600 }, 1000, 'swing');
        }
    }

    componentDidUpdate() {
        if (this.props.color === '#46A228') {
            $(".header li").css("color", "#46A228");
            $(".header a").css("color", "#46A228");
            $(".header p").css("color", "#46A228");
        } else {
            $(".header li").css("color", "white");
            $(".header a").css("color", "white");
            $(".header p").css("color", "white");
        }
    }

    onMouseOver = (e) => {
        if (this.props.color) {
            $(e.target).css("background-color", "white");
            $(e.target).css("color", this.props.color);
        }
    }

    onMouseOut = (e) => {
        if (this.props.color) {
            $(e.target).css("background-color", "transparent");
            $(e.target).css("color", this.props.color === '#46A228' ? '#46A228' : "white");
        }
    }

    renderContact() {
        return (
            <div className="contact">
                <a href="https://t.me/empowofficial" target="_blank" rel="noopener noreferrer">
                    <img src={LogoTelegram} alt="photos"></img>
                </a>
                <a href="https://twitter.com/EmpowNetwork" target="_blank" rel="noopener noreferrer">
                    <img src={LogoTwitter} alt="photos"></img>
                </a>
                <a href="https://www.facebook.com/pg/Empowofficial" target="_blank" rel="noopener noreferrer">
                    <img src={LogoFacebook} alt="photos"></img>
                </a>
                <a href="http://linkedin.com/company/empow-io" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '12px', height: '12px' }} src={Linkedin} alt="photos"></img>
                </a>
                <a href="https://medium.com/@business_44456" target="_blank" rel="noopener noreferrer">
                    <span>M</span>
                </a>
                <a href="https://github.com/empow-blockchain?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '12px', height: '12px' }} src={LogoGithub} alt="photos"></img>
                </a>
            </div>
        )
    }

    render() {

        const { toggleMenu } = this.state

        return (
            <div className="header">
                <div className="container">
                    <img src={toggleMenu ? IconClose : IconMobile} className="icon-mobile" alt="photos" onClick={() => this.setState({ toggleMenu: !toggleMenu })}></img>
                    {toggleMenu && <div className="ovelay-mobile"></div>}
                    <a className="waper-logo" href='https://empow.io'>
                        <svg style={{ fill: this.props.color === '#46A228' ? '#46A228' : 'white' }} xmlns="http://www.w3.org/2000/svg" width="38.438" height="30.796" viewBox="0 0 38.438 30.796">
                            <g id="Group_406" data-name="Group 406" transform="translate(4358.138 4353.339)">
                                <path id="Path_1588" data-name="Path 1588" className="cls-1" d="M225.508,152.013l9.228,15.3-1.71-.01L235,170.591l6-.014-15.248-25.318c-.3.479-20.766,30.762-20.766,30.762l33.29.034L224.64,153.3C225.014,152.73,225.548,151.915,225.508,152.013Zm-13.619,20.2s6.565-9.7,10.569-15.676l9.391,15.593Z" transform="translate(-4560.693 -4498.598)" />
                                <path id="Path_1590" data-name="Path 1590" className="cls-1" d="M208.544,167.552l-19.867.044,10.513-15.575.823,1.365,2.125-3.148-2.756-4.722L182.145,170.9l28.373-.068Z" transform="translate(-4540.283 -4498.828)" />
                            </g>
                        </svg>
                        <p>EMPOW</p>
                    </a>
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href="https://emscan.io/" target="_blank" rel="noopener noreferrer">Emscan</a>
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href="https://chrome.google.com/webstore/detail/empow-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd" target="_blank" rel="noopener noreferrer">Empow Wallet</a>
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href="/WHITEPAPER.pdf" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href="https://docs.google.com/document/d/1S3aUgQfzAJrCCMhuUcHt_jL9osfO6JWWjhBnpHqVv6A" target="_blank" rel="noopener noreferrer">Technical Paper</a>
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href='/roadmap'>Roadmap</a>
                        {/* {!this.props.isMobile && <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href='/ourteam'>Our Team</a>} */}
                        <a onMouseOver={(e) => this.onMouseOver(e)}
                            onMouseOut={(e) => this.onMouseOut(e)}
                            href='/faq'
                            target='_blank'>FAQ</a>


                    </ul>
                    <div className="waper-logo lang">
                        <img src={IconVi} alt="photos"></img>
                        <p style={{ fontSize: '13px', marginLeft: '10px' }}>VIE</p>
                    </div>
                </div>
                {this.renderContact()}
            </div>
        );
    }
};

export default Header