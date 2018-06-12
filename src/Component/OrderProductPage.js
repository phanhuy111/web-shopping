import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Address from './OderPage/Address';
import OderBox from './OderPage/OderBox';
import Line from './Line/Line';

class OrderProductPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div className="row">
                   <Address />
                   <OderBox />
                </div>
                <div className='footer-order' style={{ marginTop: '35%' }}>
                  <Footer />
                </div>
            </div>
        );
    }
}

export default OrderProductPage;
