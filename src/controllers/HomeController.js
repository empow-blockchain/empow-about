import React, { Component } from 'react'
import BgHome2 from '../assets/images/bg-home-2.png'

class HomeController extends Component {
    renderCloud() {
        return (
            <React.Fragment>
                <div className="cloud cloud-1">
                    <div className="rain">
                        {[...Array(100)].map((value, index) => {
                            const randomTop = (Math.random() * (60 - 50) + 50).toFixed(8);
                            const randomLeft = (Math.random() * (85 - 5) + 5).toFixed(8);
                            const randomDelay = (Math.random() * (2 - 0) + 0).toFixed(8);
                            return (
                                <div key={index} className="drop" style={{ opacity: 0, top: randomTop + 'px', left: randomLeft + '%', animationDelay: randomDelay + 's' }}></div>
                            )
                        })}
                    </div>
                </div>
                <div className="cloud cloud-2">
                    <div className="rain">
                        {[...Array(100)].map((value, index) => {
                            const randomTop = (Math.random() * (60 - 50) + 50).toFixed(8);
                            const randomLeft = (Math.random() * (85 - 5) + 5).toFixed(8);
                            const randomDelay = (Math.random() * (2 - 0) + 0).toFixed(8);
                            return (
                                <div  key={index} className="drop" style={{ opacity: 0, top: randomTop + 'px', left: randomLeft + '%', animationDelay: randomDelay + 's' }}></div>
                            )
                        })}
                    </div>
                </div>
                <div className="cloud cloud-3">
                    <div className="rain">
                        {[...Array(50)].map((value, index) => {
                            const randomTop = (Math.random() * (60 - 50) + 50).toFixed(8);
                            const randomLeft = (Math.random() * (85 - 5) + 5).toFixed(8);
                            const randomDelay = (Math.random() * (2 - 0) + 0).toFixed(8);
                            return (
                                <div key={index} className="drop" style={{ opacity: 0, top: randomTop + 'px', left: randomLeft + '%', animationDelay: randomDelay + 's' }}></div>
                            )
                        })}
                    </div>
                </div>
                <div className="cloud cloud-4">
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div id="home">
                <div className="container">
                    {this.renderCloud()}
                </div>
                <p className="slogan">Empow blockchain social network</p>
                <img className="bg-home-2" src={BgHome2} alt="photos"></img>
            </div>
        )
    }

}

export default HomeController