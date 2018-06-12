import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div className="thongtinnguoimua col-sm-12 col-md-6">
                <div className="tieude5"><h4>Chi tiết sản phẩm trong giỏ hàng</h4></div>
                <div className="ten1">
                    <label for="txtCustomerName">Tên</label>
                    <input type="text" className="required form-control" id="txtCustomerName" name="txtCustomerName" placeholder="Tên người nhận" />
                </div>
                <div className="dienthoai1">
                    <label for="txtCustomerName">Số Điện Thoại</label>
                    <input type="text" className="required form-control" id="txtCustomerName" name="txtCustomerName" placeholder="Tên người nhận" />
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
                        <input type="text" className="required form-control" id="txtAddressLine" name="txtAddressLine" placeholder="Địa chỉ nhận hàng" />
                    </div>
                    <div className="cosonhanhang">
                        <div className="form-group" id="pnlChoseShop" style={{ display: 'block' }}>
                            <select name="slTakeFromShop" id="slTakeFromShop" className="form-control">
                                <option value="">Chọn cửa hàng nhận hàng</option>
                                <option value="YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12">YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12 </option>
                                <option value="YaMe Sóc Trăng: 126 Tôn Đức Thắng">YaMe Sóc Trăng: 126 Tôn Đức Thắng </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="txtNote">Ghi chú</label>
                    <textarea rows="2" class="form-control" id="txtNote" name="txtNote"></textarea>
                </div>
            </div>


        );
    }
}

export default Address;