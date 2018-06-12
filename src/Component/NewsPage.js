import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import List from './ProductPage/List';
import News1 from './NewsPage/News1';


class NewsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <List />
                    <News1 />
                </div>
                <div className="footer_news" style={{marginTop: '150%' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default NewsPage;