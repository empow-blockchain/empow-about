import React, { Component } from 'react'
import Header from '../components/Header'
import BgFaq from '../assets/images/bg-faq.svg'

class FaqController extends Component {

    constructor (props) {

        super(props)

        this.state = {
            showQuestionIndex: false,
            data : [{
                question: "What is EMPOW?",
                anwser: "Empow is a decentralized social network built on top of Empow Blockchain. The Empow social network allows users to share information, images, and videos, and to connect and interact with other people worldwide. Users of Empow have the full right to control their data. Also, the Empow social network protects its users’ data, so that no third-party can steal the personal data of users."
            },
            {
                question: "How does EMPOW work?",
                anwser: "Empow shares revenue and distributes profits to all users. When users create content on the Empow platform, they can receive EM token. With EM tokens earned, users can use them to run ads on Empow platform or as a fuel to execute on-chain transactions on the Empow Ecosystem, or simply sell them on exchanges after the token is listed on."
            },
            {
                question: "What is the difference between EMPOW and other social networks?",
                anwser: "Empow is a decentralized and secure social network. All user information and user data are private, controlled merely by users, and cannot be exploited by third party.\n\nEmpow focuses on improving the user experience. The social network’s interface is simple, easy-to-use and user-friendly. New users will always find it easy to navigate to and use the features on Empow that they want to use.\n\nEmpow shares revenue and distributes profits to all users based on their contributions to the Empow community."
            },
            {
                question: "How to create an EMPOW account?",
                anwser: "To create an Empow account, just follow this instruction:"
            },
            {
                question: "How do I remove the word ‘newbie’ in my account name?",
                anwser: "You can remove the word ‘newbie’ by paying a fee of $1 worth of EM token. By doing that, you will no longer be a ‘newbie’ but upgraded to a ‘member’."
            },
            {
                question: "How can I level up my account level?",
                anwser: "When you accumulate at least 5,000 EMs from your contributed posts on the Empow platform, or you pay $1 worth of EM token, you can reach the level 1 in which the word ‘newbie’ in your account name is replaced by ‘member’. If you want to reach higher levels, you need to contribute more to the Empow platform."
            },
            {
                question: "Am I allowed to create multiple EMPOW accounts?",
                anwser: "You certainly are"
            },
            {
                question: "Can I delete or deactivate my account?",
                anwser: "You cannot. All your account information along with its activities will be permanently stored on Blockchain."
            },
            {
                question: "How do I change my profile information?",
                anwser: "To change your profile information, avatar, cover photo, etc., you just need to go to 'Settings'"
            },
            {
                question: "User level (Account levels) on EMPOW and how to increase levels?",
                anwser: "- Level 1: New member: Users can only post up to 20 posts per day for free.To post each further posts, account balance of a new member will be deducted an amount of EM as a fee.<br/><br/>- Level 2: Member: To be promoted to the level of Member, users have to pay $1 worth of EM token or accumulate at least 5,000 EM from their posts<br/><br/>- Level 3: Longtime member: To reach to Longtime member level, users need to accumulate at least 50,000 EM<br/><br/>- Level 4: Rising star: To reach to Rising star level, users need to accumulate at least 500,000 EM<br/><br/>- Level 5: Star: To reach to Star level, users need to accumulate at least 5,000,000 EM<br/><br/>- Level 6: Legend:  To reach to Legend level, users need to accumulate at least 50,000,000 EM<br/><br/>- Level 7: Thinker: To reach to Thinker level, users need to accumulate at least 500,000,000 EM"
            },
            {
                question: "How does your user level affect your right on Empow platform?",
                anwser: "Users at different levels will have different limits of the number of free post-interactions. In other words, the higher the user level, the more free interactions in all types (like, share, comment etc) you can leave on posts."
            },
            {
                question: "Can I change my username?",
                anwser: "You can, but you will have to pay $1 worth of EM for registering multiple usernames."
            },
            {
                question: "Can I see a list of users who are following me, or whom I am following?",
                anwser: "You can. It is shown on your profile page."
            },
            {
                question: "What can I post?",
                anwser: "You can post any kind of content you want, as long as it complies with our Terms of Use."
            },
            {
                question: "Can I delete my contents?",
                anwser: "Of course. If you do not want a post to remain seen by anyone, you can delete it at any time. This post will continue to be available on Blockchain, but we will hide it from your profile."
            },
            {
                question: "How to get my posts seen by many people?",
                anwser: "Based on the number of interactions and reviews from the Empow community, the system will decide how popular your post is on the Empow platform."
            },
            {
                question: "Where are the user rewards from?",
                anwser: "Each year, the new 3% of the total circulating supply of EM tokens will be created. These tokens will be used to reward users contributing contents on the Empow platform."
            },
            {
                question: "Why do different users get different rewards?",
                anwser: "Rewarding system for users is created on the basis of user contributions to the Empow platform. Customized algorithms of rewarding will be built for each user. That is why you see different users get different rewards."
            },
            {
                question: "Where can I see my reward?",
                anwser: "Glory points<br/><br/>Each person's glory points is calculated on the basis of his or her activities on the network, including:<br/><br/>- Number of network interactions: A network interaction is understood as token transferring, token sending, token receiving, an interaction with smart contracts, account balances, etc.,<br/><br/>- Number of social interaction on Empow platform: It is the number of social interactions and contributions to the Empow community on Empow social network. It also includes the reputation of the account (rated by users) among the community<br/><br/>Bonus points<br/><br/>Users who actively contribute to the Empow platform will receive bonus points from the Empow foundation. Users can redeem these bonus points to EM tokens after 24 hours of receiving the bonus points."
            },
            {
                question: "Is there a fee for creating an Empow account?",
                anwser: "It is totally free to create account on Empow. Your account will be approved shortly after"
            },
            {
                question: "Is there a fee to post, comment, vote, share, etc., on Empow?",
                anwser: "There is a small fee to buy bandwith do all such activities. But you will also  get a free amount of RAM and GAS daily to do all these activities. We calculate thoroughly, so that users can have enough GAS and RAM to use on the Empow platform constantly in 24 hours. So, you do not need to worry about the fee to use the plarform at all."
            },
            {
                question: "What is EM token?",
                anwser: "EM is a token issued by Empow.io. EM is the native token of the Empow Blockchain. EM tokens are not only used as a means of payment on the Empow platform, but also provide the owner of them the right to access to all features and services in the Empow ecosystem in general and the Empow social network in particular. EM tokens are deeply integrated into the platform, playing an important role in Empow ecosystem development and community expansion."
            },
            {
                question: "Where can I get EM tokens from?",
                anwser: "To receive EM, you simply need to post contents or interact with others’ content on the Empow platform. Depending on the level of your account influence among, your participation in the development of the Empow community and the rating from the community, the system will automatically reward you the Em tokens.<br/><br/>What can I use EM Token for?<br/><br/>- Run ads on Empow<br/><br/>- Reward developers and project supporters<br/><br/>- Pay for services on Empow ecosystem<br/><br/>- Execute other type of transactions in the Empow ecosystem<br/><br/>- Trade on exchanges where EM is listed on<br/><br/>- Value storing<br/><br/>-Etc.,"
            },
            {
                question: "How can I get the answers to my questions if the questions are not listed above?",
                anwser: "Join the Empow community group on Telegram and contact the admins, or you can simply send us an email to business@empow.io"
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