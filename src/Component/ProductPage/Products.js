import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux'
// import initialState from './../Redux/Reducer/initialState';


class Products extends Component {
    constructor(props){
        super(props);
       this.state ={
        items: [],
       }
    }
    
    render() {
        const catalogItems = this.props.dl;
        // console.log(catalogItems)
        // const catalogItems = this.props.filterData;
        return (
            <div className="noidung">
                <div className="tieude4">
                    <h1>Thời Trang Nam</h1>
                </div>
                <div className="hinhanh4 col-12">
                    <Product items={catalogItems} />
                </div>
                <div className="nutxem wow bounceInUp" data-wow-delay="1s">
                    <button className="xem">Xem Thêm <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapSatetToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapSatetToProps, null)(Products);