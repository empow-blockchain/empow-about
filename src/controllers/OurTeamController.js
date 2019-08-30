import React, {Component} from 'react'

import Linkedin from '../assets/images/linkedin-logo.svg'
import LogoTwitter from '../assets/images/logo-twitter.svg'
import $ from 'jquery'
import Ava1 from '../assets/images/team-1.jpg'
import Ava2 from '../assets/images/team-2.png'
import Ava3 from '../assets/images/team-3.jpg'
import Ava4 from '../assets/images/team-4.jpg'
import Ava5 from '../assets/images/team-5.jpg'
import Ava6 from '../assets/images/team-6.jpg'
import Ava7 from '../assets/images/team-7.jpg'
import Ava8 from '../assets/images/team-8.jpg'


class OurTeamController extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataTop: [{
                name: 'Phan Anh',
                type: 'Co-Founder and CEO',
                content: 'I have run and developed the company on software outsourcing, communication and social networking.\n6 years working in communication field.\n5 years working with Blockchain technology.',
                linkedin: 'https://www.linkedin.com/in/thinkerempow/',
                twitter: 'https://twitter.com/phananh_empow'
            },
            {
                name: 'Van Minh',
                type: 'Co-Founder and CTO',
                content: 'I have had experience working with blockchain for 5 years\nHas participated in ACM / ICPC for 3 consecutive years and achieved many certification in programming',
                linkedin: 'https://www.linkedin.com/in/violethair/',
                twitter: 'https://twitter.com/Vanminh_EP'
            },
            {
                name: 'Bich Ngoc',
                type: 'Writing Specialist',
                content: 'Graduated from Academy of Journalism and Communication with a degree in Online Newspaper. Writing is my great passion. I used to have experiences in launching a number of projects related to Blockchain technology. Looking forward to contributing ideas, talents and passion for the development of Blockchain technology.',
                linkedin: 'https://www.linkedin.com/in/bichngoc-empow',
            },
            {
                name: 'Van Anh',
                type: 'Fullstack Developer',
                content: 'I have had 1-year Front-end programming experience and 3-year Back-end programming\nI have mastered many frameworks in fullstack programming',
                linkedin: 'https://www.linkedin.com/in/vanvan1996',
            },
           ],
            dataBottom: [
            {
                name: 'Tien Dung',
                type: 'Front-end Developer',
                content: 'Backend programmer. Passionate about blockchain technology. 2 years of experience in Dapp development.',
                linkedin: 'https://www.linkedin.com/in/tiến-dũng-74339511b/',
            },
            {
                name: 'Khanh Bao',
                type: 'Marketing',
                content: 'I have worked in Japan for 6 years with specialty in product management, Southeast Asia market research development. With a passion for technology 4.0, bringing great value to the community',
                linkedin: 'https://www.linkedin.com/in/bảo-khánh-702954116/',
            },
            {
                name: 'Phuoc Anh',
                type: 'Designer',
                content: 'Having studied graphic design at FPT University, he has 4 years of experience in designing UI / UX for websites and mobile apps.',
                linkedin: 'https://www.linkedin.com/in/unavailable/',
            },
            {
                name: 'Hoang Hieu',
                type: 'Designer',
                content: "I'm a genuinely 'Game Artist' with five-year experience as a designer. I used to cooperate in launching a number of successful projects as well as winning some Art Awards. Therefore, I'm expecting that with my great passion, I can bring more innovative and quality products.",
                linkedin: 'https://www.linkedin.com/in/chang-hoang-208a6618a/',
            }],
        }
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            $("#our-team li").addClass("animation");
        } else {
            $("#our-team li").removeClass("animation");
        }
    }

    renderSelected(tilte, content, linkedin, twitter = false) {
        return (
            <div className="selected">
                <p>{tilte}</p>
                <p style={{fontWeight: 'normal', fontSize: ' 12px'}}>{content}</p>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img className="telegram2" src={Linkedin} alt="photos"></img>
                </a>
                {
                    twitter && 
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <img className="telegram2" src={LogoTwitter} alt="photos"></img>
                    </a>
                }
            </div>
        )
    }

    renderDefault(titlte, content, index, type) {
        var img = '';
        if (type === 'top') {
            img = index === 0 ? Ava1 : index === 1 ? Ava2 : index === 2 ? Ava3 : Ava4;
        }

        if (type === 'bottom') {
            img = index === 0 ? Ava5 : index === 1 ? Ava6 : index === 2 ? Ava7 : Ava8;
        }

        return (
            <div className="default">
                <div style={{width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: 'auto'}}>
                    <img style={{width: '100%'}} src={img} alt="photos"></img>
                </div>

                <p className="name">{titlte}</p>
                <p style={{marginTop: '4px'}} className="content">{content}</p>
                {/* <div className="telegram">
                    <img src={Linkedin} alt="photos"></img>
                </div> */}
                
            </div>
        )
    }

    renderOurTeam() {
        return (
            <div className="our-team">
                <ul className="group-1">
                {this.state.dataTop.map((value, index) => {
                    return (
                        <li style={{marginRight: `${index < 3 ? '138px' : ''}`}} key={index}>
                            {this.renderDefault(value.name, value.type, index, "top")}
                            {this.renderSelected(value.name, value.content, value.linkedin, value.twitter)}
                        </li>
                    )
                })}
                </ul>
                <ul className="group-2" style={{marginTop: '50px'}}>
                {this.state.dataBottom.map((value, index) => {
                    return (
                        <li style={{marginRight: `${index < 3 ? '138px' : ''}`}} key={index}>
                            {this.renderDefault(value.name, value.type, index, "bottom")}
                            {this.renderSelected(value.name, value.content, value.linkedin)}
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div id="our-team">
                <div className="container">
                    <p className="title">Our team</p>
                    {this.renderOurTeam()}
                </div>
            </div>
        )
    }
  
}

export default OurTeamController