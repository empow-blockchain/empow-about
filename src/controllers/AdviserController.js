import React, { Component } from 'react'
import Moon from '../assets/images/moon.svg'
import TauVuTru from '../assets/images/tau-vu-tru.svg'
import Start1 from '../assets/images/star-pig-1.svg'
import Start2 from '../assets/images/star-pig-2.svg'
import Start from '../assets/images/star-small.svg'

import $ from 'jquery'

class AdviserController extends Component {

    componentDidMount() {
        $('#adviser .star').addClass("blink");
        $.each($('#adviser .star'), (index, element) => {
            var random = (Math.random() * (2 - 0.1) + 0.1).toFixed(1);
            $(element).css("animation-delay", `${random}s`);
        })
    }

    componentDidUpdate() {

        if (this.props.isActive) {

            $('#adviser .star').addClass("blink");
            $.each($('#adviser .star'), (index, element) => {
                var random = (Math.random() * (2 - 0.1) + 0.1).toFixed(1);
                $(element).css("animation-delay", `${random}s`);
            })

            setTimeout(() => {
                $('#adviser .purple').addClass("up");
                $('#adviser .moon').addClass("fall");
            }, 500);

            setTimeout(() => {
                $('#adviser .tauvutru').addClass("fly");
            }, 1500);
        } else {
            $('#adviser .purple').removeClass("up");
            $('#adviser .moon').removeClass("fall");
            $('#adviser .tauvutru').removeClass("fly");
            $('#adviser .star').removeClass("blink");
        }
    }

    render() {
        return (
            <div id="adviser">
                <div className="container">
                    <p className="title">Adviser</p>
                    <div className="purple">
                        <p className="tex1">Are you a cryptocurrency enthusiast? Are you an angel investor?</p>
                        <p className="tex1" style={ {marginTop: '30px'} }>Do you believe that Blockchain technology will change the whole world?</p>
                        <p className="text2">Join us, we will open a new era for the global economy and trade together.</p>
                        <a href="https://web.telegram.org/#/im?p=@Thinkerqr" rel="noopener noreferrer" target="_blank">Join</a>
                    </div>
                    <img className="moon" src={Moon} alt="photos"></img>
                    <img className="tauvutru" src={TauVuTru} alt="photos"></img>

                    <img style={{ top: '300px', left: '1000px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '400px', left: '300px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '400px', left: '100px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '400px', left: '900px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '410px', left: '50px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '410px', left: '200px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '450px', left: '150px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '450px', left: '800px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '480px', left: '400px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '500px', left: '300px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '550px', left: '600px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '550px', left: '100px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '580px', left: '180px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '600px', left: '700px' }} className="star" src={Start} alt="photos"></img>

                    <img style={{ top: '550px', right: '100px' }} className="star" src={Start1} alt="photos"></img>
                    <img style={{ top: '300px', right: '70px' }} className="star" src={Start2} alt="photos"></img>
                    <img style={{ top: '400px', right: '300px' }} className="star" src={Start2} alt="photos"></img>

                    <img style={{ top: '250px', right: '100px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '300px', right: '50px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '350px', right: '200px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '400px', right: '250px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '500px', right: '350px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '500px', right: '100px' }} className="star" src={Start} alt="photos"></img>
                    <img style={{ top: '500px', right: '250px' }} className="star" src={Start} alt="photos"></img>

                </div>
            </div>
        )
    }

}

export default AdviserController