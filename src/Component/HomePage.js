import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import NewProduct from './HomePage/NewProducts';
import Carousel from './HomePage/Carousel';
import SpecialProducts from './HomePage/SpecialProducts';
import News from './HomePage/News';
import TypeofProducts from './HomePage/TypeofProducts';
import withAuthentication from './Session/withAuthentication';
import ParallaxScroll from './HomePage/ParallaxScroll';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <div>
                    <TypeofProducts />
                    <NewProduct />     
                    <ParallaxScroll />  
                    <SpecialProducts />
                    <News />
                </div>
                <Footer />
            </div>
        );
    }
}

export default withAuthentication(HomePage);




