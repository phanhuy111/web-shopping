import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class News extends Component {
    render() {
        return (
            <div className="trangtin">
        <div className="tieudetin">
          <h1> TIN TỨC </h1>
        </div>
        <div className="bangtin">
          <div className="tin1">
            <div className="cot1 wow bounceInUp">
              <div className="blog12">
                <div className="hinh1">
                  <Link to="/news1">
                    <img alt="" src="https://file.hstatic.net/1000085405/article/blog-bannerr_large.jpg" /></Link>
                </div>
                <div className="duoi-blog">
                  <h4 style={{fontSize: 18}}><Link to="/news1" style={{color: 'black'}}>SO, U THINK CAN DANCE!!!..</Link></h4>
                  <div className="blog-meta">
                    <div className="blog-author dis_inline m-r-10">
                      <i className="fa fa-pencil m-r-5" aria-hidden="true" /> Đăng bởi <span>Men in Black </span>
                    </div>
                    <div className="blog-created dis_inline">
                      <i className="fa fa-clock-o m-r-5" aria-hidden="true" /> Ngày <time dateTime="2016/05/15">2016/05/15</time>
                    </div>
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...</p> 
                  <p>
                    <Link to="/news1"><i className="fa fa-chevron-right" aria-hidden="true" /> <strong> Xem chi tiết </strong></Link>
                  </p>
                </div>
              </div>              
            </div>
          </div>
           <hr style={{ marginLeft: '200px' , width: '600px' }} />
          <div className="tin2">
            <div className="cot1 wow bounceInUp">
              <div className="blog12">
                <div className="duoi-blog">
                  <h4 style={{fontSize: 18}}><Link to="/news1" style={{color: 'black'}}>SO, U THINK CAN DANCE!!!..</Link></h4>
                  <div className="blog-meta">
                    <div className="blog-author dis_inline m-r-10">
                      <i className="fa fa-pencil m-r-5" aria-hidden="true" /> Đăng bởi <span>Men in Black </span>
                    </div>
                    <div className="blog-created dis_inline">
                      <i className="fa fa-clock-o m-r-5" aria-hidden="true" /> Ngày <time dateTime="2016/05/15">2016/05/15</time>
                    </div>
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...</p> 
                  <p>
                    <Link to="/news1"><i className="fa fa-chevron-right" aria-hidden="true" /> <strong> Xem chi tiết </strong></Link>
                  </p>
                </div>
                <div className="hinh1">
                  <Link to="/news1">
                    <img alt="" src="https://file.hstatic.net/1000085405/article/blog-bannerr_large.jpg" /></Link>
                </div>
              </div>              
            </div>
          </div>
            <hr style={{ marginLeft: '200px' , width: '600px' }}/>
          <div className="tin1">
            <div className="cot1 wow bounceInUp">
              <div className="blog12">
                <div className="hinh1">
                  <Link to="/news1">
                    <img alt="" src="https://file.hstatic.net/1000085405/article/blog-bannerr_large.jpg" /></Link>
                </div>
                <div className="duoi-blog">
                  <h4 style={{fontSize: 18}}><Link to="/news1" style={{color: 'black'}}>SO, U THINK CAN DANCE!!!..</Link></h4>
                  <div className="blog-meta">
                    <div className="blog-author dis_inline m-r-10">
                      <i className="fa fa-pencil m-r-5" aria-hidden="true" /> Đăng bởi <span>Men in Black </span>
                    </div>
                    <div className="blog-created dis_inline">
                      <i className="fa fa-clock-o m-r-5" aria-hidden="true" /> Ngày <time dateTime="2016/05/15">2016/05/15</time>
                    </div>
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...</p> 
                  <p>
                    <Link to="/news1"><i className="fa fa-chevron-right" aria-hidden="true" /> <strong> Xem chi tiết </strong></Link>
                  </p>
                </div>
              </div>              
            </div>
          </div>
          <hr style={{ marginLeft: '200px' , width: '600px' }} />
          <div className="tin2">
            <div className="cot1 wow bounceInUp">
              <div className="blog12">        
                <div className="duoi-blog">
                  <h4 style={{fontSize: 18}}><Link to="/news1" style={{color: 'black'}}>SO, U THINK CAN DANCE!!!..</Link></h4>
                  <div className="blog-meta">
                    <div className="blog-author dis_inline m-r-10">
                      <i className="fa fa-pencil m-r-5" aria-hidden="true" /> Đăng bởi <span>Men in Black </span>
                    </div>
                    <div className="blog-created dis_inline">
                      <i className="fa fa-clock-o m-r-5" aria-hidden="true" /> Ngày <time dateTime="2016/05/15">2016/05/15</time>
                    </div>
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...</p> 
                  <p>
                    <Link to="/news1"><i className="fa fa-chevron-right" aria-hidden="true" /> <strong> Xem chi tiết </strong></Link>
                  </p>
                </div>
                <div className="hinh1">
                  <Link to="/news1">
                    <img alt="" src="https://file.hstatic.net/1000085405/article/blog-bannerr_large.jpg" /></Link>
                </div>
              </div>              
            </div>
          </div>
          <hr style={{ marginLeft: '200px' , width: '600px' }} />
        </div>
      </div>
        );
    }
}

export default News;