import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addToPro } from './../Redux/action';
import _ from 'lodash'


class Product extends Component {
  render() {      
    return _.map(this.props.items,(item,i) => {
      return (
        <div className="hang1" key={i}>
        <ul className="thoitrangnu wow bounceInUp" data-wow-delay="0s">
          <li><a href="/product"  onClick={() => this.props.addToPro(item)}>
          <img alt="" src={item.picture1} /></a></li>
          <a href="/product"  onClick={() => this.props.addToPro(item)}> {item.name} </a>
          <p>{item.price} $</p>
          <button className="muahang"  onClick={() => this.props.addToCart(item)}> Mua Hàng </button>
        </ul>
      </div>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    detail: state.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: item => dispatch(addToCart(item)),
    addToPro: item=> dispatch(addToPro(item))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);

















// constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //     }
    // }

    // componentDidMount() {
    //     this.fetchData();
    // }


    // fetchData=() => {
    //     fetch('http://5a6f2daf7a276d0012b2f64e.mockapi.io/myshop')
    //         .then(response => response.json())
    //         .then(parsedJSON => parsedJSON.map(user => (
    //             {
    //                 id:`${user.id}`,
    //                 name: `${user.name}`,
    //                 picture1: `${user.picture1}`,
    //                 price: `${user.price}`
    //             }
    //         )))
    //         .then(items => this.setState({
    //             items
    //         }))
    //         .catch(error => console.log(error))
    // }