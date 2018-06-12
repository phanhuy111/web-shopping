import React, { Component } from 'react';


class ParallaxScroll extends Component {
    render() {
        return (
            <div className="parallax" style={{marginBottom: '30px'}} >
                <div className="row">
                    <div className="col-4 wow bounceInLeft" style={{ marginLeft: 150, padding: '10px 36px', width: 252, height: 200, marginTop: 138, textAlign: 'center', border: '1px solid white' }}>
                        <div className="bieutuong" style={{ fontSize: '3em', color: 'white' }}>
                        <i className="fa fa-handshake-o" aria-hidden="true"></i>
                        </div>
                        <h3 style={{ color: 'white' }}>ĐẢM BẢO</h3>
                        <p style={{ color: 'white' }} > Đảm bảo hàng hóa có nguồn gốc </p>
                    </div>
                    <div className="col-4 wow bounceInUp" style={{ marginLeft: 130, padding: '10px 36px', width: 252, height: 200, marginTop: 138, textAlign: 'center', border: '1px solid white' }}>
                        <div className="bieutuong" style={{ fontSize: '3em', color: 'white' }}>
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                        <h3 style={{ color: 'white' }}>UY TÍN</h3>
                        <p style={{ color: 'white' }} > Uy tín về chất lượng hàng hóa </p>
                    </div>
                    <div className="col-4 wow bounceInRight" style={{ marginLeft: 130, padding: '10px 36px', width: 252, height: 200, marginTop: 138, textAlign: 'center', border: '1px solid white' }}>
                        <div className="bieutuong" style={{ fontSize: '3em', color: 'white' }}>
                        <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <h3 style={{ color: 'white' }}>GIÁ RẺ</h3>
                        <p style={{ color: 'white' }} >Giá rẻ so với thị trường</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default ParallaxScroll;