import React, { Component } from 'react';

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    return valid;
};

const regexp = RegExp(
    /^\d{10,11}$/
);



class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: null,
            sodienthoai: null,
            diachi: null,
            formErrors: {
                ten: "",
                sodienthoai: "",
                diachi: "",
            },
            hien: true
        };
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "ten":
                formErrors.ten =
                    value.length < 6 ? "Vui Lòng Điền Ít Nhất 6 Kí Tự " : "";
                break;
            case "sodienthoai":
                formErrors.sodienthoai =
                    regexp.exec(value) ? "" : "Yêu cầu 10 số";
                break;
            case "diachi":
                formErrors.diachi =
                    value.length < 5 ? "Vui Lòng Điền Đầy Đủ Địa Chỉ" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    checkState = () => {
        this.setState({
            hien: true
        });
    }

    checkState1 = () => {
        this.setState({
            hien: false
        });
    }

    render() {
        const { formErrors } = this.state;
        return (
            <form className="thongtinnguoimua col-sm-12 col-md-6" onSubmit={this.handleSubmit} noValidate>
                <div className="tieude5"><h4>Chi tiết sản phẩm trong giỏ hàng</h4></div>
                <div className="ten1">
                    <label for="txtCustomerName">Tên</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            this.props.isChange(event);
                            this.handleChange(event)
                        }}
                        // className="required form-control" 
                        className={formErrors.ten.length > 0 ? "error" : null}
                        id="txtCustomerName"
                        name="ten"
                        placeholder="Tên người nhận"
                        noValidate

                    />
                    {formErrors.ten.length > 0 && (
                        <span className="errorMessage">{formErrors.ten}</span>
                    )}
                </div>
                <div className="dienthoai1">
                    <label for="txtCustomerName">Số Điện Thoại</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            this.props.isChange(event);
                            this.handleChange(event)
                        }}
                        // className="required form-control" 
                        className={formErrors.sodienthoai.length > 0 ? "error" : null}
                        id="txtCustomerName"
                        name="sodienthoai"
                        placeholder="Số điện thoại"
                        noValidate
                    />
                    {formErrors.sodienthoai.length > 0 && (
                        <span className="errorMessage">{formErrors.sodienthoai}</span>
                    )}
                </div>
                <div className="check1">
                    <div className="radio">
                        <label onClick={() => this.checkState()}>
                            <input
                                type="radio"
                                name="chosePickupAddress"
                                checked="checked"
                                className="nut1"
                                value="shipToHome"
                            />
                            Nhận hàng tại nhà/công ty/bưu điện
                        </label>
                    </div>
                    <div className="radio">
                        <label onClick={() => this.checkState1()}>
                            <input type="radio" name="chosePickupAddress" value="pickFromShop" className="nut2" />Nhận hàng tại cửa hàng YaMe gần nhất
                        </label>
                    </div>
                </div>
                <div className="inputcheck1" id="pnlAddress" style={{ display: 'block' }}>
                    {this.state.hien === true
                        ?
                        <div className="diachinhanhang">
                            <input
                                onChange={(event) => {
                                    this.props.isChange(event);
                                    this.handleChange(event)
                                }}
                                type="text"
                                className={formErrors.diachi.length > 0 ? "error" : null}
                                id="txtAddressLine"
                                name="diachi"
                                placeholder="Địa chỉ nhận hàng"
                                noValidate
                            />
                            {formErrors.diachi.length > 0 && (
                                <span className="errorMessage">{formErrors.diachi}</span>
                            )}
                        </div>
                        :
                        <div className="cosonhanhang">
                            <div className="form-group" id="pnlChoseShop" style={{ display: 'block' }}>
                                <select onChange={(event) => this.props.isChange(event)} name="diachi" id="slTakeFromShop" className="form-control">
                                    <option value="">Chọn cửa hàng nhận hàng</option>
                                    <option value="YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12">YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12 </option>
                                    <option value="YaMe Sóc Trăng: 126 Tôn Đức Thắng">YaMe Sóc Trăng: 126 Tôn Đức Thắng </option>
                                </select>
                            </div>
                        </div>
                    }
                </div>
                <div class="form-group">
                    <label for="txtNote">Ghi chú</label>
                    <textarea onChange={(event) => this.props.isChange(event)} rows="2" class="form-control" id="txtNote" name="ghichu"></textarea>
                </div>
            </form>


        );
    }
}

export default Address;