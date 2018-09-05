import React, { Component } from 'react';

class Address extends Component {

    render() {
        return (
            <div className="thongtinnguoimua col-sm-12 col-md-6">
                <div className="tieude5"><h4>Chi tiết sản phẩm trong giỏ hàng</h4></div>
                <div className="ten1">
                    <label for="txtCustomerName">Tên</label>
                    <input type="text" onChange={(event)=>this.props.isChange(event)} className="required form-control" id="txtCustomerName" name="ten" placeholder="Tên người nhận" />
                </div>
                <div className="dienthoai1">
                    <label for="txtCustomerName">Số Điện Thoại</label>
                    <input type="text" onChange={(event)=>this.props.isChange(event)} className="required form-control" id="txtCustomerName" name="sodienthoai" placeholder="Số điện thoại" />
                </div>
                <div className="check1">
                    <div className="radio">
                        <label>
                            <input type="radio" name="chosePickupAddress" checked="checked" className="nut1" value="shipToHome" /> Nhận hàng tại nhà/công ty/bưu điện
                    </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="chosePickupAddress" value="pickFromShop" className="nut2" />Nhận hàng tại cửa hàng YaMe gần nhất
                        </label>
                    </div>
                </div>
                <div className="inputcheck1" id="pnlAddress" style={{ display: 'block' }}>
                    <div className="diachinhanhang">
                        <input onChange={(event)=>this.props.isChange(event)} type="text" className="required form-control" id="txtAddressLine" name="diachi" placeholder="Địa chỉ nhận hàng" />
                    </div>
                    <div className="cosonhanhang">
                        <div className="form-group" id="pnlChoseShop" style={{ display: 'block' }}>
                            <select onChange={(event)=>this.props.isChange(event)} name="diachi" id="slTakeFromShop" className="form-control">
                                <option value="">Chọn cửa hàng nhận hàng</option>
                                <option value="YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12">YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12 </option>
                                <option value="YaMe Sóc Trăng: 126 Tôn Đức Thắng">YaMe Sóc Trăng: 126 Tôn Đức Thắng </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="txtNote">Ghi chú</label>
                    <textarea onChange={(event)=>this.props.isChange(event)} rows="2" class="form-control" id="txtNote" name="ghichu"></textarea>
                </div>
            </div>


        );
    }
}

export default Address;