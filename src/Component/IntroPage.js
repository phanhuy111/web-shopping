import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import Intro from './IntroPage/Intro';
import ListM from './IntroPage/ListM';

class IntroPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <ListM />
                    <Intro />
                </div>
                <div className="footer_intro" style={{ marginTop: '200px' }} >
                    <Footer />
                </div>
            </div>
        );
    }
}

export default IntroPage;