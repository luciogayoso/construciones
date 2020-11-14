import React from 'react';
import img1 from '../img/cons1.jpg';
import img2 from '../img/cons2.jpg';
import img3 from '../img/cons3.jpg';
import { Carousel } from 'react-bootstrap';

const Carrucel = () => {

  return (
    <Carousel style={{height: '400px'}}>
      <Carousel.Item interval={1000}>
        <img
          style={{height: '400px'}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{height: '400px'}}
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '400px'}}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )

}

export default Carrucel;