import React, { Component } from 'react'
import EmpowWallet from '../assets/images/empow-wallet.svg'
import EmScan from '../assets/images/em-scan.svg'
import BlockChainEmpow from '../assets/images/blockchain_empow.svg'
import EmAds from '../assets/images/em-ads.svg'
import EmWorld from '../assets/images/em-world.svg'
import EmPay from '../assets/images/em-pay.svg'
import $ from 'jquery'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

class EcoSystemController extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [{
                title: 'Empow wallet',
                image: EmpowWallet,
                description: 'A decentralized wallet that provides convenience and security for users. The only one for all types of cryptocurrencies. And the only one to interact with Dapps of different blockchains'
            },
            {
                title: 'EmScan',
                image: EmScan,
                description: 'A tool to assess the safety and credibility of Dapp products, providing users with transaction information about all blockchains.'
            },
            {
                title: 'Blockchain Empow',
                image: BlockChainEmpow,
                description: 'Blockchain Social Network is a pioneer of generation 4.0. Empow is built on the outstanding benefits of previous generation Blockchain, overcoming existing limitations and providing more features to meet all the requirements of the new age technology.'
            },
            {
                title: 'EmAds',
                image: EmAds,
                description: "An online and multimedia advertising auction platform built on the Empow.io social network. An EmAds' decentralized technology platform allows all participants to benefit from the money currently being wasted on intermediaries.."
            },
            {
                title: 'Empow.io',
                image: EmWorld,
                description: 'A decentralized social network built on Blockchain Empow platform, helping users to share information, photos, connect with friends, discuss, chat and interact with each other. Users can access Empow.io around the world safely, securely and have full control over the account. With Empow.io, users can freely create content to receive EM tokens.'
            },
            {
                title: 'EmPay',
                image: EmPay,
                description: 'A new generation decentralized payment gateway, paying for all transactions in cryptocurrency, aiming to bring cryptocurrencies, Dapp and Blockchain technology to daily life.'
            }]
        }
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            $("#eco-system .group-1 li.is-down").addClass("animation-down");
            $("#eco-system .group-1 li.is-up").addClass("animation-up");
        } else {
            $("#eco-system .group-1 li.is-down").removeClass("animation-down");
            $("#eco-system .group-1 li.is-up").removeClass("animation-up");
        }
    }

    renderSelected(tilte, content, index) {
        return (
            <div className="selected" onClick={() => this.onClick(index)}>
                <p>{tilte}</p>
                <p>{content}</p>
            </div>
        )
    }

    renderDefault(titlte, img) {
        return (
            <div className="default">
                <p>{titlte}</p>
                <img src={img} alt="photos"></img>
            </div>
        )
    }

    renderService() {

        const { data } = this.state;

        if(!data) return;

        return (
            <div className="service">
                <ul className="group-1">
                    {
                        data.map((value, index) => {
                            return (
                                <li key={index} className={`animation ${ index > 2 ? 'is-up' : 'is-down' }`}>
                                    <div className="inner">
                                        <div className="default">
                                            <p>{value.title}</p>
                                            <img src={value.image} alt="photos"></img>
                                        </div>
                                        <div className="selected">
                                            <p>{value.title}</p>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    renderServiceMobile() {

        const { data } = this.state;

        return (
            <Carousel 
                emulateTouch 
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows
                className="presentation-mode"
            >
                {
                    data.map( (value,index) => {
                        return (
                            <div key={index} className="section" style={ {minHeight: '400px'} }>
                                <img src={value.image} alt="photos"></img>
                                <p className="title">{value.title}</p>
                                <p className="description">{value.description}</p>
                            </div>
                        )
                    })
                }
                
            </Carousel>
        )
    }

    render() {

        const { isMobile } = this.props

        return (
            <div id="eco-system">
                <div className="container">
                    <div className="title">
                        <p>Empow Ecosystem</p>
                        <p>Empow is a series of decentralized products and services, built on the foundation of Blockchain technology, with outstanding features and utilities, overcoming all the bad restrictions of the previous generation Blockchain, making all transactions safe, transparent and secure, with Friendly and easy to use interface, making Blockchain available to everyone.</p>
                    </div>

                    {!isMobile ? this.renderService() : this.renderServiceMobile()}
                </div>
            </div>
        )
    }

}

export default EcoSystemController