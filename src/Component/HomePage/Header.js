import React, { Component } from 'react';
import logo from './../image/logo.png';
import ChangeInfor from './ChangeInfor';
import {  Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="top" >
                    <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                    <div className="form">
                        <form data-awesome-search="" className="search search-form clearfix" action="/search">
                            <input type="hidden" name="type" value="product" />
                            <input type="text" name="quantity" id="search_tern" required="" className="search_box ui-search-field" value="" placeholder="Tìm kiếm" />
                            <button className="ui-button"><i className="fa fa-search"></i></button>
                            <div className="awesome-search-result p-10" style={{ display: 'none' }}></div>
                        </form>
                        <div className="logo1">
                            <ul>
                                <li><Link to="https://www.facebook.com/phanjr.99" className="face wow bounceInUp"><span>facebook</span></Link></li>
                            </ul>
                            <ul>
                                <li><Link to="https://www.facebook.com/phanjr.99" className="ins wow bounceInUp"><span>instagram</span></Link></li>
                            </ul>
                            <ul>
                                <li><Link to="https://www.facebook.com/phanjr.99" className="google wow bounceInUp"><span>google +</span></Link></li>
                            </ul>
                            <ul>
                                <li><Link to="https://www.facebook.com/phanjr.99" className="twitter wow bounceInUp"><span>twitter</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="trai1">
                        <ChangeInfor />
                        <ul>
                            <li>
                                <Link to="/order" >
                                    <div className="giohang">
                                        <i className="fa fa-shopping-bag faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Giỏ Hàng</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/infor">
                                    <div className="giohang">
                                        <i className="fa fa-user faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Tài Khoản</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link  to="">
                                    <div className="giohang">
                                        <i className="fa fa-map-marker faa-ring animated fa-4x"></i>
                                        <span className="chulogo">Địa Chỉ</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr style={{ marginBottom: '0px', marginTop: '2px', size: '30px' }} />
                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/productpage1" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thời Trang Nam</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/productpage1">Áo Nam</Link>
                                    <Link className="dropdown-item" to="/productpage1">Quần Nam</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/productpage1" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thời Trang Nữ</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/productpage1">Áo Nữ</Link>
                                    <Link className="dropdown-item" to="/productpage1">Quần Nữ</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/productpage1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Phụ Kiện</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/productpage1">Phụ Kiện Nam</Link>
                                    <Link className="dropdown-item" to="/productpage1">Phụ Kiện Nữ</Link>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/contact">Liên Hệ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/intro">Giới Thiệu</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Header; 
