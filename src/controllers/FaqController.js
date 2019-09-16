import React, { Component } from 'react'
import Header from '../components/Header'
import BgFaq from '../assets/images/bg-faq.svg'

class FaqController extends Component {

    constructor (props) {

        super(props)

        this.state = {
            showQuestionIndex: false,
            data : [{
                question: "What is Empow wallet?",
                anwser: "Empow Wallet is a decentralized wallet that provides convenience, safety and security for users. Instead of managing many types of e-wallets, now you only need a multifunctional wallet for all cryptocurrencies."
            },
            {
                question: "What is the difference between Empow Wallet and other wallets??",
                anwser: "You only need one wallet to interact with Dapps of different blockchains.<br/>You can create EOS accounts using TRON, ETH, EOS and USDT (ERC20 and TRC 20)."
            },
            {
                question: "Why do we have an extension?",
                anwser: "Our extension is completely separate from the Empow wallet.<br/>The extension is part of our Token distribution strategy.<br/>We will reward Token for users when using wallet to perform transactions with Dapps. This helps us reward potential users and develop our ecosystem in the future."
            },
            {
                question: "Why should you use Empow Wallet?",
                anwser: "Empow Wallet offers many features like Safety, convenience, privacy, decentralization, multi-assets, multi-platforms, multinational, etc., making it easy for users to send, receive and store types of cryptocurrencies, interact with Dapps of different blockchains on one platform only."
            },
            {
                question: "How to create wallet",
                anwser: "Download the Empow Wallet app from your computer or phone.<br/>Set a password for your wallet.<br/>Sign up to receive the airdrop<br/>Use Empow Wallet to make transactions."
            },
            {
                question: "How to restore the wallet",
                anwser: "You need to have a memo phrase to recover your wallet.<br/>We offer memo phrases right the first time you create a wallet. You can retrieve the phrase by:<br/>Go to the settings on Empow Wallet => Export Account => Enter the password => Save your memo phrase."
            },
            {
                question: "What tokens are supported?",
                anwser: "We support the tokens of the following blockchains:<br/>EOS<br/>TRON<br/>ETH<br/>BNB"
            },
            {
                question: "How to secure wallet safely?",
                anwser: "Empow Wallet allows you to prevent unauthorized transactions by setting a password on the app itself. With this feature, you must verify each time you run the Empow Wallet application.<br/>Tip: Create a strong password that you do not use for any other online website or service; securely protect private keys and memo phrases on external hard drives."
            },
            {
                question: "Transaction fees on Empow Wallet",
                anwser: "Transaction fees are fees of the Blockchain network, we do not charge users."
            },
            {
                question: "What should I do if I forgot my password?",
                anwser: "Empow wallet stores your wallet address but does not store your wallet password, encrypted private keys, unencrypted private keys or memorization phrases associated with your wallet. Therefore, we are unable to assist you in retrieving wallet passwords. We cannot create a new password for your wallet unless you remember the original password.<br/>In this case, if you have a memorization phrase, you can delete the wallet and install it again with a new password."
            },
            {
                question: "What should I do when my phone is lost? Is the money in my wallet safe?",
                anwser: "Don't worry, your money is still safe. In this case, simply download the Empow Wallet app on your new device and use the memorization phrase to restore access to your entire wallet."
            },
            {
                question: "What happens if I lose my memo phrase?",
                anwser: "We always remind users to keep the memo phrases safely. We do not have access to your wallet and do not store memo phrases, so if you lose your memo phrases and lose your device, unfortunately, we can't help you.<br/>However, if you still have the Empow Wallet app installed on your device, you can retrieve your memo phrases."
            },
            {
                question: "When does Empow Wallet support Blockchain IOST?",
                anwser: "We are working and will update it as soon as possible for users, and keep updating other Blockchains to the Empow Wallet platform."
            },
            {
                question: "When can I use the Empow wallet on my phone?",
                anwser: "In October 2019, we will launch Empow Wallet on users' phones. (Supported on both iOS and Android)."
            }
            ]
        }
    }

    render() {

        const { data,showQuestionIndex } = this.state

        return (
            <div id="faq">
                <Header color="#361977"></Header>
                <div className="container">
                    <div className="left">
                        <h2 className="title">Install Empow Wallet now to mine EM token free</h2>
                        <p className="description">Now it's much easy to connect faster than ever</p>
                        <a href="https://chrome.google.com/webstore/detail/empow-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd" target="_blank" rel="noopener noreferrer" className="download">Download Now</a>
                    </div>
                    <img src={BgFaq} className="bg" alt="bg"></img>

                    <div style={ {clear: 'both'} }></div>

                    <ul className="faq-content">
                        { data.map( (value,index) => {
                            return (
                                <li key={index}>
                                    <p  onClick={ () => this.setState({showQuestionIndex: this.state.showQuestionIndex === (index + 1) ? false : (index + 1)})}>{value.question}</p>
                                    {(showQuestionIndex && showQuestionIndex === (index + 1)) &&
                                        <div className="anwser" dangerouslySetInnerHTML={{__html: value.anwser}}></div>
                                    } 
                                </li>
                            )
                        } ) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default FaqController