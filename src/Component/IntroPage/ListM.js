import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListM extends Component {
    render() {
        return (
            <div class="bentrai4">
                <div class="menudoc">
                    <div class="danhmuc1">
                        <h1>DANH MỤC</h1>
                    </div>
                    <div class="duoidanhmuc1">
                        <ul>
                            <li>
                                <Link to="/productpage1" class="phonglen">
                                    <span>Thời Trang Nam</span>
                                </Link>
                                <div class="thunho">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <span>Áo Nam</span>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="/">
                                                        <span>Áo Khoác Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>Áo Thun Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>Áo Sơmi Nam</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span>Quần Nam</span>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link to="/">
                                                        <span>Quần Jean Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>Quần Kaki Nam</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>Quần tây Nam</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span>Đồ Thể Thao Nam</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/productpage1" class="phonglen">
                                    <span>Thời Trang Nữ</span>
                                </Link>
                                <ul class="thunho">
                                    <li>
                                        <Link to="/">
                                            <span>Áo Nữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>Quần Nữ</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>Đồ Thể Thao Nữ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/productpage1" class="phonglen">
                                    <span>Phụ Kiện</span>
                                </Link>
                                <ul class="thunho">
                                    <li>
                                        <Link to="/">
                                            <span>Phụ Kiện Nam</span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <span>Giày Nam</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>Mũ Nam</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>Nước Nam</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>Phụ Kiện Nữ</span>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <span>Giày Nữ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>Mũ Nữ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>Áo Khoác Nữ</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>Phụ Kiện Tổng Hợp</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/intro">
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <span>Liên Hệ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListM;
