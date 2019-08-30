import React, { Component } from 'react'
import $ from 'jquery'

class RoadmapController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currenIndex: 3,
            data: {
                "2018": {
                    q1 : {
                        value: 'Forming ideas, researching market and completing the Whitepaper.',
                        type: 'up'
                    },
                    q3 : {
                        value: 'Developing core team',
                        type: 'down'
                    }
                },
                "2019": {
                    q2 : {
                        value: 'Building the Empow ecosystem',
                        type: 'down'
                    },
                    q3 : {
                        value: 'Testing the platform, releasing the Empow wallet. Releasing EmScan',
                        type: 'up'
                    },
                    q4 : {
                        value: 'Building a partner-team, building a advisor-team. Updating Empow wallet and Emscan.',
                        type: 'down'
                    }
                },
                "2020": {
                    q2 : {
                        value: 'Selling PreSale Empow tokens. Listing on the exchanges.',
                        type: 'up'
                    },
                    q3 : {
                        value: 'Launching Blockchain Empow Testnet and building Api system.',
                        type: 'down'
                    },
                    q4 : {
                        value: 'Launching Blockchain Empow mainnet and launching Empo social network',
                        type: 'up'
                    }
                },
                "2021": {
                    q1 : {
                        value: 'officially releasing Token sale.',
                        type: 'down'
                    },
                    q2 : {
                        value: 'Releasing EmAds ad auction platform',
                        type: 'up'
                    },
                    q3 : {
                        value: 'Issuing Empay payment platform\nContinuing to expand the ecosystem and support the community. Researching new features and new trends of the market.',
                        type: 'down'
                    }
                }
            }
        }
    }

    componentDidMount() {
        $("#roadmap .waper-year").css("transform", `translateX(-2540px)`);
        $(".year-wrapper").scrollTop(480 * 2)
    }

    componentDidUpdate() {

        if (this.props.isActive) {
            $('#roadmap .conten-down.active').addClass("move-down");
            $('#roadmap .conten-up.active').addClass("move-up");

        } else {
            $('#roadmap .conten-down.active').removeClass("move-down");
            $('#roadmap .conten-up.active').removeClass("move-up");
        }
    }

    onClick = (index) => {
        $('#roadmap .conten-down.active').removeClass("move-down");
        $('#roadmap .conten-up.active').removeClass("move-up");

        if (!this.props.isMobile) {
            $(".group .child").removeClass("color");
            $(`.group .child-${index}`).addClass("color");
            $("#roadmap .waper-year").css("transform", `translateX(-${(index - 1) * 1270}px)`);
        } else {
            $(".year-wrapper").animate({ scrollTop: 480 * (index - 1) }, 500, 'swing')
        }

        setTimeout(() => {
            this.setState({
                currenIndex: index
            })
        }, 700);
      
    }

    renderYear(index) {
        
        var year = index === 1 ? 2018 : index === 2 ? 2019 : index === 3 ? 2020 : 2021
        var data = this.state.data[`${year}`];
        return (
            <div>
                <div className="waper-down">
                   <div className={`conten-down q1 ${data.q1 && data.q1.type  === 'down' ? 'active' : ''}`}>
                        <p>The  1<sup>st</sup> quarter of {year}</p>
                        <p>{data.q1 ? data.q1.value : ''}</p>
                    </div>
                   <div className={`conten-down q2 ${data.q2 && data.q2.type  === 'down' ? 'active' : ''}`}>
                        <p>The 2<sup>nd</sup> quarter of {year}</p>
                        <p>{data.q2 ? data.q2.value : ''}</p>
                    </div>
                    <div className={`conten-down q3 ${data.q3 && data.q3.type  === 'down' ? 'active' : ''}`}>
                        <p>The 3<sup>rd</sup> quarter of {year}</p>
                        <p>{data.q3 ? data.q3.value : ''}</p>
                    </div>
                    <div className={`conten-down q4 ${data.q4 && data.q4.type  === 'down' ? 'active' : ''}`}>
                        <p>The 4<sup>th</sup> quarter of {year}</p>
                        <p>{data.q4 ? data.q4.value : ''}</p>
                    </div>
                </div>

                <div className="waper">
                    <div style={{ width: '113px' }} className="line"></div>
                    <div className="cirker"></div>
                    <div className="line"></div>
                    <div className="cirker"></div>
                    <div className="line"></div>
                    <div className="cirker"></div>
                    <div className="line"></div>
                    <div className="cirker"></div>
                    <div style={{ width: '113px' }} className="line"></div>
                </div>

                <div className="waper-up">
                   <div className={`conten-up q1 ${data.q1 && data.q1.type  === 'up' ? 'active' : ''}`}>
                        <p>The  1<sup>st</sup> quarter of {year}</p>
                        <p>{data.q1 ? data.q1.value : ''}</p>
                    </div>
                   <div className={`conten-up q2 ${data.q2 && data.q2.type  === 'up' ? 'active' : ''}`}>
                        <p>The 2<sup>nd</sup> quarter of {year}</p>
                        <p>{data.q2 ? data.q2.value : ''}</p>
                    </div>
                    <div className={`conten-up q3 ${data.q3 && data.q3.type  === 'up' ? 'active' : ''}`}>
                        <p>The 3<sup>rd</sup> quarter of {year}</p>
                        <p>{data.q3 ? data.q3.value : ''}</p>
                    </div>
                    <div className={`conten-up q4 ${data.q4 && data.q4.type  === 'up' ? 'active' : ''}`}>
                        <p>The 4<sup>th</sup> quarter of {year}</p>
                        <p>{data.q4 ? data.q4.value : ''}</p>
                    </div>
                </div>
            </div>
        )
    }

    renderPc() {
        return (
            <React.Fragment>
                <div className="waper-year">
                    {this.renderYear(1)}
                    {this.renderYear(2)}
                    {this.renderYear(3)}
                    {this.renderYear(4)}
                </div>
            </React.Fragment>
        )
    }

    onScrollMobile = () => {

        const { currenIndex } = this.state

        const value = $(".year-wrapper").scrollTop()
        let activePage = Math.ceil(value / 480)
        activePage += 1

        if (activePage > 4) activePage = 4;

        if (currenIndex !== activePage) {

            $(".group .child").removeClass("color");
            $(`.group .child-${activePage}`).addClass("color");

            this.setState({
                currenIndex: activePage
            })
        }
    }

    renderMobile() {
        return (
            <div className="year-wrapper" onScroll={this.onScrollMobile}>
                <div className="year-fullheight">
                    <div className="one-year">
                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Q1 - 2017</p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>

                    <div className="one-year">
                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Q1- 2018 : Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>

                    <div className="one-year">
                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Q1 - 2019 Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>

                    <div className="one-year">
                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Q1 - 2020 Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                        <div className="one-quarter">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <p>Kiểm tra nền tảng, phát hành ví Empow wallet.  Phát hành EmScan.Chính thức phát hành nền tảng thanh toán Empay. Phân phối Token Empow, đồng thời liệt kê trên sàn giao dịch. </p>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div id="roadmap">
                <div className="container">
                    <p className="title">Roadmap</p>
                    <div className="wrapper">
                        {!this.props.isMobile && this.renderPc()}
                        <div className="group">
                            <div className="child child-1" onClick={() => this.onClick(1)}>
                                <p>2018</p>
                            </div>
                            <div className="child child-2" onClick={() => this.onClick(2)}>
                                <p>2019</p>
                            </div>
                            <div className="child child-3 color" onClick={() => this.onClick(3)}>
                                <p>2020</p>
                            </div>
                            <div className="child child-4" onClick={() => this.onClick(4)}>
                                <p>2021</p>
                            </div>
                        </div>
                        {this.props.isMobile && this.renderMobile()}
                    </div>
                </div>
            </div>
        )
    }

}

export default RoadmapController