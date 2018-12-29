import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quantity from './QuantityBar'
import { removeFromCart } from './../Redux/action';


class OderLine extends Component {

    render() {
        
        const cartList = this.props.cart.map((item, index) => {
            // let this.props.cart.length = 0
            // console.log(item.product.id)
            if( this.props.cart.length !== 0){
                return <div className="dongdau" key={index}>
                <div>
                    <img src={item.product.picture1} alt="" />
                </div>
                <span>
                    <a href="/product">{item.product.name}</a>
                    <p> size M </p>
                </span>
                <div className="congcu">
                    <Quantity item={item} /> 
                    <p className="gia"> {item.product.price} VND</p>
                    <span className="delete"><a onClick={ () => this.props.removeFromCart(item.product)} > X </a></span>
                </div>
                </div>
            }
            else{
                return(
                  <div className="chu" style={{ marginLeft: 70, fontSize: 18, fontFamily: 'sans-serif' }} >
                     Cart is empty
                  </div>
                )
            }
            
        });

       

        //
        return (
            <div>
             
              {cartList}  
             {/* {  cart.length !== 0 ? ({cartList}) :(<div className="chu" style={{ marginLeft: 70, fontSize: 18, fontFamily: 'sans-serif' }} >Cart is empty</div>)  }   */}
            </div>
        )
    }

}

function mapStateToProps(state) {
     return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: product => dispatch(removeFromCart(product)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OderLine);
