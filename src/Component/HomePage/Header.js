import React, { Component } from 'react';
import logo from './../image/logo.png';
import ChangeInfor from './ChangeInfor';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Fuse from 'fuse.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: [],
            value: '',
            hien: false
        }
    }

    componentDidMount() {
        fetch('https://5a6f2daf7a276d0012b2f64e.mockapi.io/newproduct')
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({
                    dataSearch: findresponse,
                })
            })

    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }


    handleShow = () => {
        this.setState({
            hien: true
        });
    }

    handleShow1 = () => {
        this.setState({
            hien: false
        });
    }

    showResult = () => {
        const options = {
            keys: ['name']
        }
        const fuse = new Fuse(this.state.dataSearch, options)
        const result = fuse.search(this.state.value)
        console.log(result)
        if (this.state.hien === true) {
            return (
                result.map((e, i) => {
                    return (
                        <div className="modalP">
                            <div className="sanphamtong" key={i}>
                                <div className="sanpham111">
                                    <img src={e.picture1} />
                                    <p>{e.name}</p>
                                    <p>{e.price}$</p>
                                </div>
                            </div>
                            <button
                                className="nutcancel"
                                onClick={this.handleShow1}
                            >
                                Cancel
                        </button>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>
                <div className="top" >
                    <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                    <div className="form">
                        <div data-awesome-search="" className="search search-form clearfix">
                            <input
                                type="text"
                                name="quantity"
                                id="search_tern"
                                required=""
                                className="search_box ui-search-field"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Tìm kiếm" />
                            <button className="ui-button" onClick={this.handleShow}><i className="fa fa-search"></i></button>
                        </div>
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
                                        <span className="NOY">
                                            {this.props.cart.length}
                                        </span>
                                        <i className="fa fa-user faa-ring animated fa-4x"></i>
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
                                <Link to="">
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
                {
                    this.showResult()
                }
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

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

