import React, { Component } from 'react';
import Slide from './../Slide';
import {Link} from 'react-router-dom';
// import initialState from './../Redux/Reducer/initialState';

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            checked: true
        }
    }
    
    changed = () =>{
        if(this.state.checked === true){
            this.props.filterBrand()
        }
        else{
            this.props.showAll()
        }
       this.setState({checked: !this.state.checked});
    }

    changed1 = () =>{
        if(this.state.checked === true){
            this.props.filterBrand1()
        }
        else{
            this.props.showAll()
        }
       this.setState({checked: !this.state.checked});
    }

    changed2 = () =>{
        if(this.state.checked === true){
            this.props.filterSize()
        }
        else{
            this.props.showAll()
        }
       this.setState({checked: !this.state.checked});
    }

    changed3 = () =>{
        if(this.state.checked === true){
            this.props.filterSize1()
        }
        else{
            this.props.showAll()
        }
       this.setState({checked: !this.state.checked});
    }
    
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
                                <Link  to="/productpage1" className="phonglen">
                                    <span>Thời Trang Nam</span>
                                </Link>
                                <div className="thunho">
                                    <ul>
                                        <li>
                                            <Link to="/productpage1">
                                                <span>Áo Nam</span>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Áo Khoác Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Áo Thun Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Áo Sơmi Nam</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/productpage1">
                                                <span>Quần Nam</span>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Quần Jean Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Quần Kaki Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/productpage1">
                                                        <span>Quần tây Nam</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/productpage1">
                                                <span>Đồ Thể Thao Nam</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link  to="/productpage1" className="phonglen">
                                    <span>Thời Trang Nữ</span>
                                </Link>
                                <ul className="thunho">
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Áo Nữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Quần Nữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Đồ Thể Thao Nữ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link  to="/productpage1" className="phonglen">
                                    <span>Phụ Kiện</span>
                                </Link>
                                <ul className="thunho">
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Phụ Kiện Nam</span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Giày Nam</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Mũ Nam</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Nước Nam</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Phụ Kiện Nữ</span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Giày Nữ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Mũ Nữ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productpage1">
                                                    <span>Áo Khoác Nữ</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/productpage1">
                                            <span>Phụ Kiện Tổng Hợp</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/productpage1">
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/productpage1">
                                    <span>Liên Hệ</span>
                                </Link>
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
                                <input 
                                    onClick={ this.changed }
                                    // () => this.props.filterBrand()
                                      id="dong1" type="checkbox" 
                                />
                                <label for="dong1">Puma</label>
                            </div>
                            <div className="nam">
                                <input 
                                    onClick={this.changed1} 
                                    id="dong1" type="checkbox" 
                                />
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
                                    <input 
                                        onClick={ this.changed2} 
                                        id="dong1" type="checkbox" 
                                    />
                                    <label for="dong1">XS</label>
                                </div>
                                <div className="hai">
                                    <input 
                                        onClick={ this.changed3} 
                                        id="dong1" type="checkbox" 
                                    />
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
                        <iframe title="slide" src="https://www.facebook.com/plugins/page.php?to=https%3A%2F%2Fwww.facebook.com%2Fwelax.vn%2F%3Fhc_ref%3DART1M5ZL_ok3-fAU8akTUeG5D8cTUvgADVQNu14O-X4DHM-zPMOxEHGi_9YCqAvDNXc%26fref%3Dnf&tabs=timeline&width=320&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width={245} height={280} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowTransparency="true" />
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