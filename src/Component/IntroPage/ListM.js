import React, { Component } from 'react';

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
                                <a href="/productpage1" class="phonglen">
                                    <span>Thời Trang Nam</span>
                                </a>
                                <div class="thunho">
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
                                <a href="/productpage1" class="phonglen">
                                    <span>Thời Trang Nữ</span>
                                </a>
                                <ul class="thunho">
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
                                <a href="/productpage1" class="phonglen">
                                    <span>Phụ Kiện</span>
                                </a>
                                <ul class="thunho">
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
                                <a href="/intro">
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contact">
                                    <span>Liên Hệ</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListM;
