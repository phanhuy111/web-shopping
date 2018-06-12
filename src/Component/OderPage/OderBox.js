import React, { Component } from 'react';
import OderLine from './OderLine';
import { connect } from 'react-redux';

class OderBox extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
  render() {
        const { cart } = this.props;      
        const subTotals = cart.map((item) => {
            return item.quantity * parseInt(item.product.price, 0);
        });
        return (
            <div className="thongtinsanpham col-sm-12 col-md-6">
                <div className="tieude5">
                    <h4>Chi tiết sản phẩm trong giỏ hàng</h4>
                </div>
                <table className="shopping-cart">
                    <OderLine items={[]} />
                </table>
                <hr style={{ width: '570px' }} />

                <div className="total">
                    <p>Tổng Cộng:</p>
                    <p className="total1"> {subTotals.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} VNĐ</p>
                </div>
                <div className="button5">
                    <button>
                        Đặt Hàng
                </button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('@@', state.cart)
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(OderBox);