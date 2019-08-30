import React, { Component } from 'react'
import Header from '../components/Header'
import FooderController from './FooderController';

class TermsOfServiceController extends Component {

    constructor (props) {

        super(props)

        this.state = {
            index: 1,
            data1 : [{
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            }],
            data2 : [{
                title: "DATA2",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            },
            {
                title: "Thỏa thuận này là giữa bạn và Empow.  Bạn phải đảm bảo rằng:",
                content: [
                    "Tuân theo các quy tắc và luật pháp tại quốc gia cư trú; hoặc quốc gia nơi bạn truy cập trang web và dịch vụ này;",
                    "Tuân theo các điều khoản dịch vụ này;",
                    "Đủ 18 tuổi và có quyền tham gia vào  các giao dịch liên quan đến tài sản tiền điện tử.",
                    "Bạn có trách nhiệm đọc kỹ điều khoản dịch vụ này trước khi bắt đầu sử dụng Empow.",
                    "Bằng cách truy cập trang web, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện đầy đủ."
                ]
            }]
        }
    }

    show = (index) => {
        this.setState({
            index
        })
    }

    render() {

        const { data1, data2, index } = this.state

        return (
            <div id="terms-of-service">
                <Header color="#005b6f"></Header>
                <div className="container">
                    <div className="waper">
                        <ul className="left">
                            <li className={this.state.index === 1 ? "active" : ""} onClick={() => this.show(1)}>Điều khoản dịch vụ</li>
                            <li className={this.state.index === 2 ? "active" : ""} onClick={() => this.show(2)}>Điều khoản sử dụng</li>
                        </ul>

                        {index === 1 && <ul className="right">
                            { data1.map( (value,index) => {
                                return (
                                    <li style={{marginBottom: '50px'}} key={index}>
                                        <p className="haha">Các bên</p>
                                        <p className="title">{value.title}</p>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '40px'}}>
                                            {value.content.map((valueChild, indexChild) => {
                                                return (
                                                    <li style={{display: 'list-item', listStyle: 'disc'}} className="content">{valueChild}</li>
                                                )
                                            })}
                                        </ul>
                                       
                                    </li>
                                )
                            } ) }
                        </ul>}

                        {index === 2 && <ul className="right">
                            { data2.map( (value,index) => {
                                return (
                                    <li style={{marginBottom: '50px'}} key={index}>
                                        <p className="haha">Các bên</p>
                                        <p className="title">{value.title}</p>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '40px'}}>
                                            {value.content.map((valueChild, indexChild) => {
                                                return (
                                                    <li style={{display: 'list-item', listStyle: 'disc'}} className="content">{valueChild}</li>
                                                )
                                            })}
                                        </ul>
                                       
                                    </li>
                                )
                            } ) }
                        </ul>}
                    </div>
                </div>
                <FooderController></FooderController>
            </div>
        )
    }

}

export default TermsOfServiceController