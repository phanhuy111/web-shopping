import React, { Component } from 'react';

class SpecialProducts extends Component {
    render() {
        return (
            <div>
                <div className="sanphamnoibat">
                    <h1> Sản Phẩm Nổi Bật</h1>
                    <div className="slide2">
                        <ul className="thoitrangnu wow bounceInLeft" data-wow-delay="1.3s">
                            <li><a><img src="image/15.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                        <ul className="thoitrangnu wow bounceInLeft" data-wow-delay="0.7s">
                            <li><a><img src="image/14.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                        <ul className="thoitrangnu wow bounceInLeft" >
                            <li><a><img src="image/18.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                        <ul className="thoitrangnu wow bounceInRight">
                            <li><a><img src="image/20.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                        <ul className="thoitrangnu wow bounceInRight" data-wow-delay="0.7s">
                            <li><a><img src="image/16.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                        <ul className="thoitrangnu wow bounceInRight" data-wow-delay="1.3s">
                            <li><a><img src="image/19.jpg" alt="" /></a></li>
                            <div className="thongtinsanpham1">   
                            <a>Áo Sơ Mi</a>
                            <p>4000$</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialProducts;


// onmouseover="this.src='image/21.jpg'" onmouseout="this.src='image/20.jpg'"