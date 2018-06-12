import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import List from './ProductPage/List';
import News2 from './NewsPage/News2';


class NewsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <List />
                    <News2 />
                </div>
                <div className="footer_news" style={{marginTop: '150%' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default NewsPage;