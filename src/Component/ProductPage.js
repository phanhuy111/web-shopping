import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import List from './ProductPage/List';
import Products from './ProductPage/Products';
import { connect } from 'react-redux';
// import { getData } from './Redux/action';

class ProductPage extends Component {
    
    // componentWillMount() {
    //     this.props.getData()
    //   }
    
    render() {
        // const { items } = this.props;
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <List />
                    <Products 
                    />
                </div>
                <div className="footer_product" style={{ marginTop : '180%'}}>
                   <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.products,
    cartItems: state.cart
});

export default connect( mapStateToProps , {} )(ProductPage);