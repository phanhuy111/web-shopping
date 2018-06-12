import React, { Component } from 'react';
import logo from './../image/logo.png';
import ChangeInfor from './ChangeInfor';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="top" >
                    <div className="logo"><a href="/"><img src={logo} alt="logo" /></a></div>
                    <div className="form">
                        <form data-awesome-search="" className="search search-form clearfix" action="/search">
                            <input type="hidden" name="type" value="product" />
                            <input type="text" name="quantity" id="search_tern" required="" className="search_box ui-search-field" value="" placeholder="Tìm kiếm" />
                            <button className="ui-button"><i className="fa fa-search"></i></button>
                            <div className="awesome-search-result p-10" style={{ display: 'none' }}></div>
                        </form>
                        <div className="logo1">
                            <ul>
                                <li><a href="https://www.facebook.com/phanjr.99" className="face wow bounceInUp"><span>facebook</span></a></li>
                            </ul>
                            <ul>
                                <li><a href="https://www.facebook.com/phanjr.99" className="ins wow bounceInUp"><span>instagram</span></a></li>
                            </ul>
                            <ul>
                                <li><a href="https://www.facebook.com/phanjr.99" className="google wow bounceInUp"><span>google +</span></a></li>
                            </ul>
                            <ul>
                                <li><a href="https://www.facebook.com/phanjr.99" className="twitter wow bounceInUp"><span>twitter</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="trai1">
                        <ChangeInfor />
                        <ul>
                            <li>
                                <a href="/order" >
                                    <div className="giohang">
                                        <i className="fa fa-shopping-bag faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Giỏ Hàng</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/infor">
                                    <div className="giohang">
                                        <i className="fa fa-user faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Tài Khoản</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="giohang">
                                        <i className="fa fa-map-marker faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Địa Chỉ</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr style={{ marginBottom: '0px', marginTop: '2px', size: '30px' }} />
                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/productpage1" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thời Trang Nam</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="/productpage1">Áo Nam</a>
                                    <a className="dropdown-item" href="/productpage1">Quần Nam</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/productpage1" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thời Trang Nữ</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="/productpage1">Áo Nữ</a>
                                    <a className="dropdown-item" href="/productpage1">Quần Nữ</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/productpage1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phụ Kiện</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="/productpage1">Phụ Kiện Nam</a>
                                    <a className="dropdown-item" href="/productpage1">Phụ Kiện Nữ</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/contact">Liên Hệ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/intro">Giới Thiệu</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Header; 
