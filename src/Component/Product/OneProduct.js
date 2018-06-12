import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactImageMagnify from 'react-image-magnify';

class OneProduct extends Component {
    render() {
        return (
            <div className="row" >
                <div className="trai5">
                    <span>
                        <ReactImageMagnify 
                            {...{
                                smallImage: {
                                    isFluidWidth: true,
                                    src: this.props.detail.picture1,
                                    sizes: '(min-width: 500px) 25vw, (min-width: 500px) 25vw, 50vw'
                                },
                                largeImage: {
                                    src: this.props.detail.picture1,
                                    width: 100,
                                    height: 1000
                                }
                            }} 
                        />
                    </span>
                    <div className="traiduoi">
                        <div className="hinh71"><img src={this.props.detail.picture2} alt="" /></div>
                        <div className="hinh71"><img src={this.props.detail.picture3} alt="" /></div>
                        <div className="hinh71"><img src={this.props.detail.picture1} alt="" /></div>
                    </div>
                </div>
                <div className="phai5">
                    <div className="hangtren">
                        <h1>{this.props.detail.name}</h1>
                    </div>
                    <div className="hangduoi">
                        <p>
                            <label>Tình Trạng</label>
                            <span>Còn Hàng</span>
                        </p>
                        <p>
                            <label>Loại Sản Phẩm</label>
                            <span>Còn Hàng</span>
                        </p>
                        <p>
                            <label>Thương Hiệu</label>
                            <span>Tifalu</span>
                        </p>
                    </div>
                    <div className="hangduoi1">
                        <span>{this.props.detail.price}</span>
                    </div>
                    <div className="hangduoi2">
                        <div className="single-option-selector" data-option="option1" id="product-select-option-0">
                            <input type="radio" value="L" name="option1" className="hidden" id="product-select-option-0-0" />
                            <label for="product-select-option-0-0" className="variant-option-item">L</label>
                            &nbsp;
                        <input type="radio" value="M" name="option1" className="hidden" id="product-select-option-0-1" />
                            <label for="product-select-option-0-1" className="variant-option-item">M</label>
                            &nbsp;
                        <input type="radio" value="XL" name="option1" className="hidden" id="product-select-option-0-2" />
                            <label for="product-select-option-0-2" className="variant-option-item">XL</label>
                        </div>
                    </div>
                    <div className="hangduoi3">
                        <div data-quantity="" className="form-input clearfix product-quantity m-b-15">
                            <label className="dis_block m-b-5">Số lượng</label>
                            <button className="button p-minus b-r-0">-</button>
                            <input name="quantity" className="quantity text-center" type="number" min="1" value="1" />
                            <button className="button p-plus b-l-0">+</button>
                        </div>
                    </div>
                    <div className="hangduoi4">
                        <button className="nutthem" >THÊM VÀO GIỎ</button>
                    </div>
                    <div className="hangduoi5">
                        <div className="tag">
                            <label className="text-italic">Tags:  </label>
                            <a href="/collections/all/hang-xuat-khau"> hàng xuất khẩu</a>
                            <span className="separator"> / </span>
                            <a href="/collections/all/chat-luong-cao">chất lượng cao</a>
                            <span className="separator"> / </span>
                            <a href="/collections/all/ao-thun-nhap">áo thun nhập</a>
                            <span className="separator"> / </span>
                            <a href="/collections/all/thoi-trang">thời trang</a>
                        </div>
                    </div>
                    <div className="hangduoi6">
                        <p>Sản phẩm sẽ được giao trong vòng từ 2 đến 5 ngày tính từ thời gian đặt hàng</p>
                        <ul>
                            <li>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
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

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneProduct);