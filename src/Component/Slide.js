import React, { Component } from 'react';
import Slider from 'react-slick';
import hinh5 from './image/5.jpg';
import hinh6 from './image/6.jpg';
import hinh7 from './image/7.jpg';
import hinh8 from './image/8.jpg';
import hinh9 from './image/9.jpg';
import hinh10 from './image/10.jpg';


class Slide extends Component {
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
    };
    return (
      <div className="slider4">
        <Slider {...settings}>
          <div><img className="hinh5" src={hinh5} alt="hinh1"  style={{ width:200, height:240, margin:'12px 23px' }} /></div>
          <div><img className="hinh5" src={hinh6} alt="hinh1"  style={{ width:200, height:240, margin:'12px 23px' }} /></div>
          <div><img className="hinh5" src={hinh7} alt="hinh1"  style={{ width:200, height:240, margin:'12px 23px' }} /></div>
          <div><img className="hinh5" src={hinh8} alt="hinh1"  style={{ width:200, height:240, margin:'12px 23px' }} /></div>
          <div><img className="hinh5" src={hinh9} alt="hinh1"  style={{ width:200, height:240, margin:'12px 23px' }} /></div>
          <div><img className="hinh5" src={hinh10} alt="hinh1" style={{ width:200, height:240, margin:'12px 23px' }}  /></div>
        </Slider>
      </div>
    );
  }
}

export default Slide;