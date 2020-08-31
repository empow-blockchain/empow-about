import React from 'react';
import HomeController from './controllers/HomeController';
import EcoSystemController from './controllers/EcoSystemController';
import FeatureController from './controllers/FeatureController';
import AboutController from './controllers/AboutController';
import RoadmapController from './controllers/RoadmapController';
import AdviserController from './controllers/AdviserController';
import FooderController from './controllers/FooderController';
import FaqController from './controllers/FaqController';
import OurTeamController from './controllers/OurTeamController';
import ReactFullpage from '@fullpage/react-fullpage';

import './assets/scss/style.scss';
import Header from './components/Header';
import $ from 'jquery'
import TermsOfServiceController from './controllers/TermsOfServiceController';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            color: '#46A228',
            isMobile: false,
            currentIndex: false
        }

        const width = $("body").width()

        if (width <= 768) {
            this.state.isMobile = true
        }

        this.state.pathname = window.location.pathname
    }

    componentDidMount() {
        if (this.state.pathname === '/roadmap') {
            this.setState({
                currentIndex: 5
            })
        }

        if (this.state.pathname === '/ourteam') {
            this.setState({
                currentIndex: 6
            })
        }
    }

    onScroll = (destination) => {
        var color = '#46A228';
        if (destination.index === 0) {
            color = '#46A228';
        }
        if (destination.index === 1) {
            color = '#3282c0';
        }

        if (destination.index === 2) {
            color = '#D04541';
        }

        if (destination.index === 3) {
            color = '#00AD7E';
        }

        if (destination.index === 4) {
            color = '#D0C941';
        }

        if (destination.index === 5) {
            color = '#6F1EB1';
        }

        if (destination.index === 6) {
            color = '#FF7E0E';
        }

        if (destination.index === 7) {
            color = '#007791';
        }

        this.setState({
            index: destination.index + 1,
            color,
            currentIndex: false
        })
    }

    renderHomePage(move = null) {
        return (
            <React.Fragment>
                <Header color={this.state.color}/>
                <ReactFullpage
                    navigation={true}
                    scrollingSpeed={1000} /* Options here */
                    onLeave={(origin, destination, direction) => this.onScroll(destination)}
                    render={({ state, fullpageApi }) => {
                        if (move && fullpageApi) {
                            fullpageApi.moveTo(move);
                        }
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <HomeController isActive={this.state.index === 1} />
                                </div>
                                <div className="section">
                                    <EcoSystemController isActive={this.state.index === 2} />
                                </div>
                                <div className="section">
                                    <FeatureController isActive={this.state.index === 3} />
                                </div>
                                <div className="section">
                                    <AboutController isActive={this.state.index === 4} />
                                </div>
                                <div className="section">
                                    <RoadmapController isActive={this.state.index === 5} />
                                </div>
                                <div className="section">
                                    <OurTeamController isActive={this.state.index === 6} />
                                </div>
                                <div className="section">
                                    <AdviserController isActive={this.state.index === 7} />
                                </div>
                                <div className="section">
                                    <FooderController isActive={this.state.index === 8} />
                                </div>
                            </ReactFullpage.Wrapper>

                        );
                    }}
                />
            </React.Fragment>
        )
    }

    renderPc = () => {
        const { pathname } = this.state

        console.log(pathname);

        if(pathname === '/faq') {
            return <FaqController></FaqController>
        }
        
        if (pathname === '/termsofservice') {
            return <TermsOfServiceController></TermsOfServiceController>
        }

        if (this.state.currentIndex === 5) {
            return this.renderHomePage(5)
        }

        if (this.state.currentIndex === 6) {
            return this.renderHomePage(6)
        }
        return this.renderHomePage()
    }

    renderMobile() {

        const { pathname } = this.state

        if (pathname === '/termsofservice') {
            return <TermsOfServiceController></TermsOfServiceController>
        }

        if(pathname === '/faq') {
            return <FaqController></FaqController>
        }

        return (
            <React.Fragment>
                <Header pathname={pathname} isMobile={this.state.isMobile} color={'white'}/>
                <HomeController />
                <EcoSystemController isMobile={this.state.isMobile} />
                <FeatureController />
                <AboutController isMobile={this.state.isMobile} />
                <RoadmapController isMobile={this.state.isMobile}/>
                <AdviserController isActive={true}/>
                <FooderController />
            </React.Fragment>
        )
    }

    render() {
        const { isMobile } = this.state

        if (!isMobile) return this.renderPc()

        return this.renderMobile()
    }
}


export default App