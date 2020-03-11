import React, { Component } from 'react'
import Header from '../components/Header'
import FooderController from './FooderController';

class TermsOfServiceController extends Component {

    constructor(props) {

        super(props)

        this.state = {
            data: [
                {
                    title: '1.	Involved Parties',
                    content: `This agreement is made between you and Empow team. You must ensure that:\n- You comply with the rules and laws of the country of residence; or the country where you access to the websites and platforms as parts of services Empow team offers & provides;\n- You comply with these Terms of Service;\n- You are at least 18 years old and entitled to participate in transactions related to cryptocurrency assets.\nIt is your responsibility to read carefully these Terms of Service before using services.\nBy visiting Empow’s official website, we assume that you have accepted the full Terms of Service`
                },
                {
                    title: '2.	Membership Acceptance',
                    content: `We reserve the right to accept or reject your registration to the extent permitted by the applicable laws.`
                },
                {
                    title: '3.	Services Offered & Provided',
                    content: `Services Empow team offers & provides:\n- Create & interact with contents, interact with & connect with other users to receive EM tokens on Empow.io social network ;\n- Building safe, high-performance platforms on Empow Blockchain ;\n- Register and use Empow Wallet ; \n- Explore & search for all Dapps information on EmScan ;\n- Digital payment on Empay platform ;\n- Ads auction on EmAds service.`
                },
                {
                    title: '4.	Account Registration',
                    content: `To access to all the services, you need to create a new account on Empow Blockchain (or Empow wallet). By creating a new account, you agree to:\n- Provide correct and complete personal information when creating or updating your account;\n- Timely update your account information;\n- Keep your login information completely private;\n- Promptly notify Empow team if you encounter any security breach related to the services that Empow offers & provides;\n- Take responsibility for all activities you do when using Empow’s services.`
                },
                {
                    title: '5.	Copyright',
                    content: `All contents on the websites or platforms as parts of the provided services including: logo and all designs, texts, graphics, images, information, data, audio files, software, etc. belong exclusively to Empow team. You must not:\n- Republish, copy contents and documents;\n- Modify or make any derivative use of contents & documentations; \n- Use any data mining method, robot or similar data collection and extraction methods on websites or platforms to acquire database;\n- Use any of the contents & documentations outside of its intended purpose.\nAny use of Empow’s materials without Empow team’s written permission is strictly prohibited.\nUnauthorized use may violate applicable laws, including copyright and trademark regulations; media regulation & enforcement in country where Empow company registered.`
                },
                {
                    title: '6.	Privacy',
                    content: `Both the Empow team and users will undertake not to disclose any confidential information related to this agreement.\nWe will automatically protect all user information. Do not provide any of your personal information to any third parties without your own permission.`
                },
                {
                    title: '7.	Change of Terms of Service',
                    content: `We reserve the right to change Terms of Service at any time without notice and without your consent. Any changes or modifications that do not affect user rights will be effective for all users immediately after the announcement of the changes or modifications.\nIt is your responsibility to frequently read and update these Terms of Service to ensure that your use of the provided services still complies with this agreement.`
                },
                {
                    title: '8.	Restrictions & Termination',
                    content: `We reserve the right to restrict or terminate the service delivery at any time without any prior notice or special conditions on the use of the services made prior to the restriction or termination. Termination of this agreement will not affect any of our rights or your obligations accrued prior to the termination.\nOther restrictions on service delivery and applied circumstances and conditions may also be indicated on Empow’s official website.`
                },
                {
                    title: '9.	Feedback',
                    content: `We appreciate all your feedback on the services we offer and provide.\nAlso, you must agree that we are free to use, disclose, accept or modify any feedback (including any ideas, concepts, suggestions or comments) provided by you without any payment for you.`
                },
                {
                    title: '10. Force Majeure',
                    content: `Empow team will not be responsible for any delay, interruption or failure to provide services if the delay, interruption or failure are caused by the following actions: war, fire, flood, earthquake, etc. and any similar actions which are out of our control.`
                },
                {
                    title: '11. The Full Agreement',
                    content: `These Terms of Service constitute the entire agreement between any user and Empow team regarding the use of the offered & provided services.\nThese Terms of Service can replace any other agreements, promises, warranties, and understandings between any user and Empow team, whether written or oral, regarding the use of the offered & provided services.`
                },
                {
                    title: '12. Contact information',
                    content: `If you have any questions about these Terms of Service or any other policies, please contact us via email or send us a message via telegram, twitter, facebook page, etc.`
                }
            ]
        }
    }

    render() {

        const { data } = this.state

        return (
            <div id="terms-of-service">
                <Header color="#005b6f"></Header>
                <div className="container">
                    <div className="waper">
                        <ul>
                            {data.map((value, index) => {
                                return (
                                    <li style={{ marginBottom: '50px' }} key={index}>
                                        <p>{value.title}</p>
                                        <p className="content">{value.content}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <FooderController></FooderController>
            </div>
        )
    }

}

export default TermsOfServiceController