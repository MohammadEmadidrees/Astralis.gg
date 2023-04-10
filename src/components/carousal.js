import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Slider from "../../src/slider.jpg"
import Sliderr from "../../src/sliderr.jpg"
import Sliderrr from "../../src/sliderrr.jpg"
import Marquee from 'react-fast-marquee';

function Carousal() {
  return (
    <>
     <div className='marqueediv'>
      <Marquee className='marquee' speed="120" direction='right'  pauseOnHover="true">
        We Have Been Qualified For RMR Major Paris
      </Marquee>
    </div>
    <Carousel className='Break'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sliderr}
          alt="First Major" />
        <Carousel.Caption>
          <h3 className='heading'>First Major</h3>
          <p className='para'>Astralis Won Their First Major In Atlanta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sliderrr}
          alt="Second Major" />

        <Carousel.Caption>
          <h3 className='heading'>Second Major</h3>
          <p className='para'>Astralis Won Their Second Major In London.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider}
          alt="Third Major" />

        <Carousel.Caption>
          <h3 className='heading'>Third Major</h3>
          <p className='para'>
            Astralis Won Their Second Major In Katowice
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </>
  );
}

export default Carousal;