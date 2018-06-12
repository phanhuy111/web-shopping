import React, { Component } from 'react';
import Slider from 'react-slick';
import hinh5 from '../image/5.jpg';
import hinh6 from '../image/6.jpg';
import hinh7 from '../image/7.jpg';
import hinh8 from '../image/8.jpg';
import hinh9 from '../image/9.jpg';
import hinh10 from '../image/10.jpg';
import hinh11 from '../image/10.jpg';
import hinh12 from '../image/10.jpg';
import hinh13 from '../image/10.jpg';
import next from '../image/next.png';
import prev from '../image/prev.png';


class SpecialProducts extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      centerMode: true,
      autoplay: true,
      centerPadding: '50px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className="slideduoi">
        <Slider ref={c => this.slider = c} {...settings}>
          <div className="hinhslide123" key={1}><img className="hinh1" src={hinh5} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Thời Trang Nam</h3>
            </div>
          </div>
          <div className="hinhslide123" key={2}><img className="hinh1" src={hinh6} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Thời Trang Nữ</h3>
            </div>
          </div>
          <div className="hinhslide123" key={3}><img className="hinh1" src={hinh7} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Phụ Kiện</h3>
            </div>
          </div>
          <div className="hinhslide123" key={4}><img className="hinh1" src={hinh8} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Âu Phục</h3>
            </div>
          </div>
          <div className="hinhslide123" key={5}><img className="hinh1" src={hinh9} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Nổi Bật</h3>
            </div>
          </div>
          <div className="hinhslide123" key={6}><img className="hinh1" src={hinh10} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Khuyến Mãi</h3>
            </div>
          </div>
          <div className="hinhslide123" key={7}><img className="hinh1" src={hinh11} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Thể Thao</h3>
            </div>
          </div>
          <div className="hinhslide123" key={8}><img className="hinh1" src={hinh12} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Xu Hướng</h3>
            </div>
          </div>
          <div className="hinhslide123" key={9}><img className="hinh1" src={hinh13} alt="hinh1" />
            <div className="chunhat123" >
              <h3>Cá Tính</h3>
            </div>
          </div>
        </Slider>

        <div className="buttonslide">
          <button className='buttontrai' onClick={this.previous} > <img alt="" src={prev} /> </button>
          <button className='buttonphai' onClick={this.next}> <img alt="" src={next} /> </button>
        </div>
      </div>
    );  
  }
}


  export default SpecialProducts;




