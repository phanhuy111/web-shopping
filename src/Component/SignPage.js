import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import Signin from './SignPage/Signin';


class SignPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div style={{ marginTop:'15px'}}>
                    <Signin />
                </div>
                <div className="footer_sign" style={{ bottom: '-20%' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default SignPage;