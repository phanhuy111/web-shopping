import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Address from './OderPage/Address';
import OderBox from './OderPage/OderBox';
import Line from './Line/Line';


class OrderProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: '',
            sodienthoai: '',
            diachi: '',
            ghichu: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Line />
                <div className="row">
                    <Address
                        isChange={this.isChange}
                    />
                    <OderBox                      
                        ten={this.state.ten}
                        sodienthoai={this.state.sodienthoai}
                        diachi={this.state.diachi}
                        ghichu={this.state.ghichu}
                    />
                </div>
                <div className='footer-order' style={{ marginTop: '35%' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default OrderProductPage;
