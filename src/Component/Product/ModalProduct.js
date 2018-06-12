import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalProduct extends Component {
    render() {
        return (
            <div class="motkhoi" style={{ display:'block' }}>
                <h3>
                    <span>Bạn đang xem...</span>
                </h3>
                <div class="ProductImage">
                       <img alt="" src={this.props.detail.picture1} style={{width: 120, height: 130}} />
                </div>
                <div class="product-title">
                    <span>{this.props.detail.name}</span>
                </div>
                <div class="prices">
                    <span>{this.props.detail.price}</span>
                </div>
                <div class="btn add-to-cart button11">
                    <span>MUA NGAY</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detail: state.detail
    };
}


export default connect(mapStateToProps, null)(ModalProduct);