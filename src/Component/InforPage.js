import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import ListM from './IntroPage/ListM';
import Infor from './InforPage/Infor';


class InforPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <ListM />
                    <Infor />
                </div>
                <div className="footer_intro" style={{ marginTop: '77%'}} >
                    <Footer />
                </div>
            </div>
        );
    }
}

export default InforPage;

