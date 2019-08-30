import React, { Component } from 'react'
import IconDeDang from '../assets/images/icon-de-dang.svg'
import IconTienLoi from '../assets/images/icon-tien-loi.svg'
import IconAnToan from '../assets/images/icon-an-toan.svg'
import IconMinhBach from '../assets/images/icon-minh-bach.svg'
import IconBaoMat from '../assets/images/icon-bao-mat.svg'
import IconTuChu from '../assets/images/icon-tu-chu.svg'
import IconDaNenTang from '../assets/images/icon-da-nen-tang.svg'
import IconDaQuocGia from '../assets/images/icon-da-quoc-gia.svg'
import $ from 'jquery'

class FeatureController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataTop: [
                {
                    title: 'Easy',
                    content: 'The interface is simple and easy to use with quick and user-friendly navigation options.'
                },
                {
                    title: 'Convenience',
                    content: 'Empow ecosystem provides a series of decentralized products and services, seamlessly connected to each other to bring convenience to users.'
                },
                {
                    title: 'Safety',
                    content: 'Blockchain technology protects users from any fraud.'
                },
                {
                    title: 'Transparency',
                    content: 'All information is recorded on blocks publicly and cannot be modified.'
                }
            ],
            dataBottom: [
                {
                    title: 'Security',
                    content: 'Users information is encrypted and stored dispersed everywhere.'
                },
                {
                    title: 'Autonomy',
                    content: 'Products in the Empow ecosystem are decentralized and not controlled by intermediaries.'
                },
                {
                    title: 'Multi-platform',
                    content: 'Fully support iOS, Android and extensions.'
                },
                {
                    title: 'Multinational',
                    content: 'All users in the world can use the products in the Empow ecosystem without being limited by geographic space and territory.'
                }

            ]
        }
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            $("#feature li").addClass("animation");
        } else {
            $("#feature li").removeClass("animation");
        }
    }

    renderSelected(tilte, content) {
        return (
            <div className="selected">
                <p>{tilte}</p>
                <p>{content}</p>
            </div>
        )
    }

    renderDefault(titlte, index, type) {
        var img = '';
        if (type === 'top') {
            img = index === 0 ? IconDeDang : index === 1 ? IconTienLoi : index === 2 ? IconAnToan : IconMinhBach;
        }

        if (type === 'bottom') {
            img = index === 0 ? IconBaoMat : index === 1 ? IconTuChu : index === 2 ? IconDaNenTang : IconDaQuocGia;
        }

        return (
            <div className="default">
                <div className="logo">
                    <img src={img} alt="photos"></img>
                </div>
                <p>{titlte}</p>
            </div>
        )
    }

    renderFeature() {
        return (
            <div className="feature">
                <ul className="group-1">
                    {this.state.dataTop.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value.title, index, "top")}
                                {this.renderSelected(value.title, value.content)}
                            </li>
                        )
                    })}
                </ul>
                <ul className="group-2">
                    {this.state.dataBottom.map((value, index) => {
                        return (
                            <li key={index}>
                                {this.renderDefault(value.title, index, "bottom")}
                                {this.renderSelected(value.title, value.content)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div id="feature">
                <div className="container">
                    <p className="title">Why should you choose Empow?</p>
                    {this.renderFeature()}
                </div>
            </div>
        )
    }

}

export default FeatureController