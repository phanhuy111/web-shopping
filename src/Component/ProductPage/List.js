import React, { Component } from 'react';
import Slide from './../Slide';

class List extends Component {
    render() {
        return (
            <div className="bentrai4">
                <div className="menudoc">
                    <div className="danhmuc1">
                        <h1>DANH MỤC</h1>
                    </div>
                    <div className="duoidanhmuc1">
                        <ul>
                            <li>
                                <a href="/productpage1" className="phonglen">
                                    <span>Thời Trang Nam</span>
                                </a>
                                <div className="thunho">
                                    <ul>
                                        <li>
                                            <a>
                                                <span>Áo Nam</span>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a>
                                                        <span>Áo Khoác Nam</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <span>Áo Thun Nam</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <span>Áo Sơmi Nam</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>
                                                <span>Quần Nam</span>
                                            </a>
                                            <ul>
                                                <li>
                                                    <a>
                                                        <span>Quần Jean Nam</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <span>Quần Kaki Nam</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <span>Quần tây Nam</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>
                                                <span>Đồ Thể Thao Nam</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/productpage1" className="phonglen">
                                    <span>Thời Trang Nữ</span>
                                </a>
                                <ul className="thunho">
                                    <li>
                                        <a>
                                            <span>Áo Nữ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Quần Nữ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Đồ Thể Thao Nữ</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/productpage1" className="phonglen">
                                    <span>Phụ Kiện</span>
                                </a>
                                <ul className="thunho">
                                    <li>
                                        <a>
                                            <span>Phụ Kiện Nam</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a>
                                                    <span>Giày Nam</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span>Mũ Nam</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span>Nước Nam</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Phụ Kiện Nữ</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a>
                                                    <span>Giày Nữ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span>Mũ Nữ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span>Áo Khoác Nữ</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Phụ Kiện Tổng Hợp</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Liên Hệ</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menudoc1">
                    <div className="danhmuc1 mucdau">
                        <h1>THƯƠNG HIỆU</h1>
                        <div className="thuonghieu">
                            <div className="mot">
                                <input id="dong1" type="checkbox" />
                                <label for="dong1">Tifalu</label>
                            </div>
                            <div className="hai">
                                <input id="dong1" type="checkbox" />
                                <label for="dong1">Polo</label>
                            </div>
                            <div className="ba">
                                <input id="dong1" type="checkbox" />
                                <label for="dong1">Zyp</label>
                            </div>
                            <div className="bon">
                                <input id="dong1" type="checkbox" />
                                <label for="dong1">Puma</label>
                            </div>
                            <div className="nam">
                                <input id="dong1" type="checkbox" />
                                <label for="dong1">NIKE</label>
                            </div>
                        </div>
                    </div>
                    <div className="danhmuc1 muchai">
                        <h1>LỌC SẢN PHẨM</h1>
                        <div className="tren">
                            <div className="kichthuoc1">
                                <h1>Kích Thước</h1>
                                <div className="mot">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">XS</label>
                                </div>
                                <div className="hai">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">S</label>
                                </div>
                                <div className="ba">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">M</label>
                                </div>
                                <div className="bon">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">L</label>
                                </div>
                                <div className="nam">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">XL</label>
                                </div>
                            </div>
                            <div className="kichthuoc1" >
                                <h1>Giá</h1>
                                <div className="mot">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">Tất Cả</label>
                                </div>
                                <div className="hai">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">100.000 Đ ~ 200.000 Đ</label>
                                </div>
                                <div className="ba">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">200.000 Đ ~ 300.000 Đ</label>
                                </div>
                                <div className="bon">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">300.000 Đ ~ 400.000 Đ</label>
                                </div>
                                <div className="nam">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">400.000 Đ ~ 500.000 Đ</label>
                                </div>
                                <div className="nam">
                                    <input id="dong1" type="checkbox" />
                                    <label for="dong1">Trên 500.000 Đ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="face">
                    <div className="danhmuc1">
                        <h1>LIKE PAGE TRÊN FACEBOOK</h1>
                    </div>
                    <div className="oface">
                        <iframe title="slide" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwelax.vn%2F%3Fhc_ref%3DART1M5ZL_ok3-fAU8akTUeG5D8cTUvgADVQNu14O-X4DHM-zPMOxEHGi_9YCqAvDNXc%26fref%3Dnf&tabs=timeline&width=320&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width={245} height={280} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowTransparency="true" />
                    </div>
                </div>

                <div className="sanphamnoibat1">
                    <div className="chu5">
                        <h1>SẢN PHẨM NỔI BẬT</h1>
                        <div style={{  width: '247px', border: '1px solid', height: '300px'}}>
                        <Slide />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;