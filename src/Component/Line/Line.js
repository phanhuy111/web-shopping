import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './../HomePage';
import OderPage from './../OrderProductPage';
import ProductPage from './../ProductPage';
import SignPage from './../SignPage';
import IntroPage from './../IntroPage';
import ContactPage from './../ContactPage';
import Product from './../Product';
import NewsPage from './../NewsPage';
import Infor from './../InforPage';
import News from './../News';

const routes = [
    {
        path: '/',
        exact: true,
        slidebar: () => <div></div>,
        main: () => <HomePage />,
    },
    {
        path: '/login',
        slidebar: () => <div>Đăng Kí-Đăng Nhập</div>,
        main: () => <SignPage />,
    },
    {
        path: '/product',
        slidebar: () => <div>Sản Phẩm</div>,
        main: () => <Product />,
    },
    {
        path: '/productpage1',
        slidebar: () => <div>Trang Sản Phẩm</div>,
        main: () => <ProductPage />,
    },
    {
        path: '/order',
        slidebar: () => <div>Đặt Hàng</div>,
        main: () => <OderPage />,
    },
    {
        path: '/intro',
        slidebar: () => <div>Giới Thiệu</div>,
        main: () => <IntroPage />,
    },
    {
        path: '/contact',
        slidebar: () => <div>Liên Hệ</div>,
        main: () => <ContactPage />,
    },
    {
        path: '/news',
        slidebar: () => <div>Tin Tức</div>,
        main: () => <NewsPage />,
    },
    {
        path: '/infor',
        slidebar: () => <div>Thông Tin</div>,
        main: () => <Infor />,
    },
    {
        path: '/news1',
        slidebar: () => <div>Thông Tin</div>,
        main: () => <News />,
    }
]

class Line extends Component {

    render() {
        return (
            <div className="dongden">
                <div className="chu2">
                    <span><a> Trang Chủ </a> &nbsp;&frasl;  </span>
                    <p>                      
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.slidebar}
                            />
                        ))}   
                    </p>
                </div>
            </div>
        );
    }
}

export default Line;