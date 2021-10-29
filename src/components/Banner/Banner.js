import React from 'react';
import { Carousel } from 'react-bootstrap';
import tourist1 from '../images/tourest1.jpg';
import tourist2 from '../images/tourest2.jpg';
import tourist3 from '../images/tourest.jpg';

const Banner = () => {
    return (
        <>
            <Carousel fade className=''>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tourist1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>service for everyone tourist</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tourist2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>service for everyone tourist</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tourist3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>service for everyone tourist</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;