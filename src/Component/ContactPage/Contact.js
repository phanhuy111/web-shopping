import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div class="duoi4">
                <div class="lienhe">
                    <div class="chu4">
                        <h1>Liên Hệ Với Chúng Tôi</h1>
                        <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                    </div>
                    <div class="o2">
                        <div class="otren">
                            <input type="text" placeholder="Tên của bạn" />
                            <input type="text" placeholder="Số điện thoại của bạn" />
                            <input type="text" placeholder="Email của bạn" />
                        </div>
                        <textarea name="binhluan" cols="30" rows="10" placeholder="Viết bình luận"></textarea>
                        <button>Gửi Liên Hệ</button>
                    </div>
                </div>
                <div class="lienlac">
                    <div class="chu4">
                        <h1>Chúng tôi ở đây</h1>
                        <p>Giải pháp bán hàng toàn diện từ website đến cửa hàng</p>
                    </div>
                    <div class="phanduoi">
                        <div class="khoi1">
                            <span><i class="fa fa-building-o"></i>65 Trần Quốc Hoàn, Q. Tân Bình, Tp.HCM</span>
                            <span><i class="fa fa-envelope"></i>hi@haravan.com</span>
                            <span><i class="fa fa-phone"></i>1900.636.099</span>
                        </div>
                        <div class="khoi2">
                            <span><i class="fa fa-building-o"></i>65 Trần Quốc Hoàn, Q. Tân Bình, Tp.HCM</span>
                            <span><i class="fa fa-envelope"></i>hi@haravan.com</span>
                            <span><i class="fa fa-phone"></i>1900.636.099</span>
                        </div>
                        <div class="khoi3">
                            <span><i class="fa fa-building-o"></i>65 Trần Quốc Hoàn, Q. Tân Bình, Tp.HCM</span>
                            <span><i class="fa fa-envelope"></i>hi@haravan.com</span>
                            <span><i class="fa fa-phone"></i>1900.636.099</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;