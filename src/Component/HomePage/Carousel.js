import React, { Component } from 'react';
import Slider from 'react-slick';
import hinh1 from '../image/1.jpg';
import hinh2 from '../image/2.jpg';
import hinh3 from '../image/3.jpg';
import hinh4 from '../image/1.jpg';

class Carousel extends Component {
  render() {
    var settings = {
      autoplay:true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <div className="slider1">
        <Slider {...settings}>
          <div>
          <div className="chu1 mot">
                <h1 className="wow bounceInRight">MEN IN BLACK</h1>
                <p className="wow bounceInLeft" data-wow-delay="0.5s"> GentlemanCollection </p>
            </div>
            <img className="hinh1" src={hinh1} alt="hinh1" />
          </div>
          <div>
          <div className="chu1 hai">
                <h1 className="wow bounceInRight">MEN IN BLACK</h1>
                <p className="wow bounceInLeft" data-wow-delay="0.5s"> I'm Handsome Man</p>
            </div>
            <img className="hinh2" src={hinh2} alt="hinh2" />
          </div>
          <div>
          <div className="chu1 ba">
                <h1 className="wow bounceInRight">MEN IN BLACK</h1>
                <p className="wow bounceInLeft" data-wow-delay="0.5s"> I'm Generous Man</p>
            </div>
            <img className="hinh3" src={hinh3} alt="hinh3" /></div>
          <div>
          <div className="chu1 bon">
                <h1 className="wow bounceInRight">MEN IN BLACK</h1>
                <p className="wow bounceInLeft" data-wow-delay="0.5s"> I'm Smart Man</p>
            </div>
            <img className="hinh4" src={hinh4} alt="hinh4" /></div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
