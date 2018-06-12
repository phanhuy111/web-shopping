
import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Contact from './ContactPage/Contact';
import Map from './ContactPage/Map';
import Line from './Line/Line';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <Map />
                    <Contact />
                </div>
                <div className="footer_contact" style={{ position: 'relative'  ,top: '90px' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default ContactPage;