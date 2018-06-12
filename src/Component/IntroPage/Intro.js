import React, { Component } from 'react';
import VideoStream from './Videostream';

class Intro extends Component {
    render() {
        return (
            
            <div className="container4">
                <div className="trongh1">
                    <h1>Giới Thiệu</h1>
                </div>
                <div className="duoih1">
                    <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
                       <VideoStream />
                    <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                    <div className="ul1">
                        <ul>
                            <li>
                                <span>Bạn là ai</span><br />
                            </li>
                            <li><span>Giá trị kinh doanh của bạn là gì</span><br />
                             </li>
                            <li><span>Địa chỉ cửa hàng</span><br />
                            </li>
                            <li><span>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</span><br /></li>
                            <li><span>Bạn kinh doanh ngành hàng online được bao lâu</span><br /></li><li><span>Đội ngũ của bạn gồm những ai</span><br />
                            </li>
                            <li><span>Thông tin liên hệ</span><br />
                            </li>
                            <li><span>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</span><br />
                            </li>
                        </ul>
                    </div>
                    <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại
            <a href="/"><strong> đây</strong></a> hoặc thêm những bài viết mới trong phần quản lý <a href="/"><strong> Trang nội dung</strong></a>.</p>
                </div>
            </div>
        );
    }
}

export default Intro;