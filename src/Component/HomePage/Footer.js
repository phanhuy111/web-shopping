import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="benphai">
                        <div className="day1 gioithieu">
                            <h1>GIỚI THIỆU CHUNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><a href="/">Tìm Kiếm</a></li>
                                    <li><a href="/intro">Giới Thiệu</a></li>
                                    <li><a href="/contact">Hỏi Đáp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="day1 huongdan">
                            <h1>HƯỚNG DẪN MUA HÀNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><a href="/productpage1">Thời Trang Nam</a></li>
                                    <li><a href="/productpage1">Thời Trang Nữ</a></li>
                                    <li><a href="/productpage1">Phụ Kiện</a></li>
                                    <li><a href="/news">Blog</a></li>
                                    <li><a href="/productpage1">Nổi Bật</a></li>
                                    <li><a href="/contact">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="day1 chamsoc">
                            <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><a href="/infor">Giao Hàng Và Đổi Trả</a></li>
                                    <li><a href="/product">Bảng Kích Thước</a></li>
                                    <li><a href="/contact">Khuyến Mãi</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bentrai">
                        <div className="ketnoi">
                            <h1>Kết Nối Với Chúng Tôi</h1>
                            <div className="logo">
                                <ul>
                                    <li><a href="https://www.facebook.com/phanjr.99" className="face wow bounceInUp">1</a></li>
                                </ul>
                                <ul>
                                    <li><a href="https://www.facebook.com/phanjr.99" className="ins wow bounceInUp">2</a></li>
                                </ul>
                                <ul>
                                    <li><a href="https://www.facebook.com/phanjr.99" className="google wow bounceInUp">3</a></li>
                                </ul>
                                <ul>
                                    <li><a href="https://www.facebook.com/phanjr.99" className="twitter wow bounceInUp">4</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dangki"></div>
                        <h1>Đăng Kí Nhận Tin</h1>
                        <input type="text" submit="o" placeholder="Nhập Email của bạn" style={{ width:'250px' }} />

                        <span>
                            <input type="submit" submit="nut" value="Subscribe" style={{marginLeft:'20px'}} />
                        </span>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;