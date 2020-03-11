import React, { Component } from 'react'
import IconMovie from '../assets/images/movie-symbol-of-video-camera.svg';
import IconWebsite from '../assets/images/website.svg';
import IconAlarm from '../assets/images/alarm-clock.svg';
import IconHourglass from '../assets/images/hourglass.svg';
import IconMusic from '../assets/images/music-player.svg';
import IconPig from '../assets/images/piggy-bank.svg';
import IconWrench from '../assets/images/wrench.svg';
import IconBalloons from '../assets/images/balloons.svg';
import IconConfetti from '../assets/images/confetti.svg';
import IconProject from '../assets/images/project-management.svg';
import IconHeadphone from '../assets/images/headphone-symbol.svg';
import IconPresent from '../assets/images/present.svg';
import IconXMLID from '../assets/images/XMLID_2603_.svg';
import IconStart from '../assets/images/start-up.svg';
import IconArtificial from '../assets/images/artificial-intelligence.svg';
import IconRobotic from '../assets/images/robotic.svg';
import IconComputer2 from '../assets/images/computer2.svg';
import IconCamera from '../assets/images/photo-camera.svg';
import IconDevices from '../assets/images/devices.svg';
import IconComputer from '../assets/images/computer.svg';
import IconInfinity from '../assets/images/infinity.svg';
import IconRobot from '../assets/images/robot-arm.svg';
import IconStatistics from '../assets/images/statistics.svg';
import IconBlockchain from '../assets/images/blockchain.svg';
import IconData from '../assets/images/data-mining.svg';
import $ from 'jquery'
import BgEmpo from '../assets/images/bg-empo.svg'

class AboutController extends Component {

    componentDidUpdate() {
        if (this.props.isActive) {
            $('#about .title').addClass("zoom");
            setTimeout(() => {
                $('#about .waper-logo img').addClass("move");
            }, 500);
        } else {
            $('#about .title').removeClass("zoom");
            setTimeout(() => {
                $('#about .waper-logo img').removeClass("move");
            }, 500);
        }
    }

    renderMobile() {
        return (
            <img src={BgEmpo} alt="photos"></img>
        )
    }

    renderPc() {
        return (
            <React.Fragment>
                <img className="img1" style={{ top: '25px', left: '40px' }} src={IconMovie} alt="photos"></img>
                <img className="img2" style={{ top: '-10px', left: '60px' }} src={IconWebsite} alt="photos"></img>
                <img className="img3" style={{ top: '20px', left: '40px' }} src={IconAlarm} alt="photos"></img>
                <img className="img4" style={{ top: '-25px', left: '50px' }} src={IconHourglass} alt="photos"></img>
                <img className="img5" style={{ top: '10px', left: '40px' }} src={IconMusic} alt="photos"></img>
                <img className="img6" style={{ top: '10px', left: '50px' }} src={IconPig} alt="photos"></img>
                <img className="img7" style={{ top: '25px', left: '65px' }} src={IconConfetti} alt="photos"></img>
                <img className="img8" style={{ top: '-45px', left: '50px' }} src={IconWrench} alt="photos"></img>
                <img className="img9" style={{ top: '-15px', left: '25px' }} src={IconBalloons} alt="photos"></img>
                <img className="img10" style={{ top: '-30px', left: '50px' }} src={IconProject} alt="photos"></img>
                <img className="img11" style={{ top: '20px', left: '20px' }} src={IconHeadphone} alt="photos"></img>
                <img className="img12" style={{ top: '40px', left: '40px' }} src={IconPresent} alt="photos"></img>
                <p className="title">EMPOW</p>
                <img className="img13" style={{ top: '-155px', left: '60px' }} src={IconData} alt="photos"></img>
                <img className="img14" style={{ top: '-140px', left: '85px' }} src={IconProject} alt="photos"></img>
                <img className="img15" style={{ top: '-40px', left: '-5px' }} src={IconBlockchain} alt="photos"></img>
                <img className="img16" style={{ left: '-15px' }} src={IconStatistics} alt="photos"></img>
                <img className="img17" style={{ top: '-30px', left: '0px' }} src={IconRobot} alt="photos"></img>
                <img className="img18" style={{ top: '-55px', left: '10px' }} src={IconInfinity} alt="photos"></img>
                <img className="img19" src={IconComputer} alt="photos"></img>
                <img className="img20" style={{ left: '10px' }} src={IconDevices} alt="photos"></img>
                <img className="img21" style={{ top: '-60px', left: '35px' }} src={IconComputer2} alt="photos"></img>
                <img className="img22" style={{ left: '15px' }} src={IconCamera} alt="photos"></img>
                <img className="img23" style={{ top: '-45px' }} src={IconRobotic} alt="photos"></img>
                <img className="img24" style={{ top: '-15px', left: '15px' }} src={IconArtificial} alt="photos"></img>
                <img className="img25" style={{ top: '-120px', left: '-60px' }} src={IconXMLID} alt="photos"></img>
                <img className="img26" style={{ top: '-100px', left: '-40px' }} src={IconStart} alt="photos"></img>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div id="about">
                <div className="container">
                    { this.props.isMobile && <p className="title">Empow.io Social Network</p>} 
                    <div className="wrapper">
                        <div className="waper-logo">
                            {!this.props.isMobile ? this.renderPc() : this.renderMobile()}
                        </div>
                        <p className="content">Empow.io is a social network built on Empow's Blockchain</p>
                        <p className="text">Empow.io will bring users a smooth experience like other social networks. With Empow, users can share information, photos, connect with friends, discuss, chat and interact with each other. Users are free to create content on Empow.io and will receive profits from advertising and bonuses from the system. Empow.io will bring safe and breakthrough experiences of social networking.
</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default AboutController