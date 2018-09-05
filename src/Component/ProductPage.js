import React, { Component } from 'react';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Line from './Line/Line';
import List from './ProductPage/List';
import Products from './ProductPage/Products';
import { connect } from 'react-redux';
// import { getData } from './Redux/action';
import initialState from '././Redux/Reducer/initialState';


class ProductPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: initialState.products,
            expanded: false,
            filteredData: initialState.products,    
            // data: this.props.data,
            // expanded: false,
            // filteredData: this.props.data,        
        }
        this.filterBrand = this.filterBrand.bind(this);
        this.filterSize = this.filterSize.bind(this);
        this.filterBrand1 = this.filterBrand1.bind(this);
        this.filterSize1 = this.filterSize1.bind(this);
    }


    // nhandulieu = () => {
    //     this.state.filteredData
    // }

    showAll(){
        this.setState({
            filteredData: this.state.data
        })
    }

    filterBrand() {
        // alert("hi")
        // event.preventDefault();    
        const filtered = this.state.data.filter(function(e) {            
                return (e.brand === 'Puma' );
            });
            this.setState({
               filteredData: filtered,
            });      
    }

    filterBrand1(event) {
        // event.preventDefault();    
        const filtered1 = this.state.data.filter(function(e) {            
                return (e.brand === 'NIKE' );
            });
            this.setState({
              filteredData: filtered1,
            }); 
    }


    filterSize(event) {
        // event.preventDefault();    
        const filtered2 = this.state.data.filter(function(e) {            
                return (e.size === 'XS' );
            });
            this.setState({
              filteredData: filtered2,
            }); 
        }
    
    filterSize1(event) {
            // event.preventDefault();    
            const filtered3 = this.state.data.filter(function(e) {            
                    return (e.size === 'S' );
                });
                this.setState({
                  filteredData: filtered3,
                }); 
        }


    render() {
        return (
            <div>
                <Header />
                <Line />
                <div>
                    <List 
                       filterBrand={(event)=>this.filterBrand(event)} 
                       filterBrand1={(event)=>this.filterBrand1(event)} 
                       filterSize={(event)=>this.filterSize(event)} 
                       filterSize1={(event)=>this.filterSize1(event)} 
                       showAll={(event)=>this.showAll(event)} 
                    />
                    <Products dl={this.state.filteredData}    />
                </div>
                <div className="footer_product" style={{ marginTop : '180%'}}>
                   <Footer />
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     items: state.products,
//     cartItems: state.cart
// });

export default connect( null , {} )(ProductPage);