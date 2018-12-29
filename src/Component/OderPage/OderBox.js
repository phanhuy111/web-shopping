import React, { Component } from 'react';
import OderLine from './OderLine';
import { connect } from 'react-redux';
import firebase from './../InforPage/firebase';

class OderBox extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            hien: false
        }
    }


    addData = (ten, sodienthoai, diachi, ghichu, item) => {
        var sanpham = {};
        sanpham.ten= this.props.ten;
        sanpham.sodienthoai= this.props.sodienthoai;
        sanpham.diachi= this.props.diachi;
        sanpham.ghichu= this.props.ghichu;
        sanpham.tensp = this.props.cart.map((item)=>{
            return item.product.name
          })
        sanpham.gia = this.props.cart.map((item)=>{
            return item.quantity * parseInt(item.product.price, 0);
          })
        console.log(sanpham)
        firebase.database().ref('donhang').push(sanpham)
        this.setState({
             hien : true
        });
    }

    AppearModal=()=>{
        this.setState({
            hien : false 
        });
    }

    AppearModal11 = () =>{
        if(this.state.hien === true){
           return(
                 <div className="modal11">
                <div className="tieude1111">
                    <h1>
                        Chúc Mừng Bạn Đã Mua Hàng Thành Công
                    </h1>
                </div>
                <div className="nutclo">
                    <button 
                       onClick={()=>this.AppearModal()}
                    >
                        Close
                    </button>
                </div>
            </div>
           )
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
                    <button onClick= {()=>this.addData() }>
                        Đặt Hàng
                    </button>
                </div>
                {
                  this.AppearModal11()
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(OderBox);