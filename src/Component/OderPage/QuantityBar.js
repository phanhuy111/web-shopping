import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuantity } from './../Redux/action';


class QuantityBar extends Component {

    increase(){
        let {product,quantity} = this.props.item 
        this.props.setQuantity({product,quantity: quantity + 1}) 
        this.forceUpdate()
    }
    decrease(){
        let {product,quantity} = this.props.item 
        this.props.setQuantity({product,quantity: quantity - 1})
        this.forceUpdate()
    }


    render() {

    
        return (
            <div className="stepper-input">
                <a className="decrement" onClick={this.decrease.bind(this)}>–</a>
                <span className="quantity" value={this.props.item.quantity} > { this.props.item.quantity } </span>
                <a className="increment" onClick={this.increase.bind(this)}>+</a>
            </div>
    )
    }
}


  const mapStateToProps = (state) => {
      return {

      }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        setQuantity: ({product,quantity}) => dispatch(setQuantity({product,quantity}))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps )(QuantityBar)


