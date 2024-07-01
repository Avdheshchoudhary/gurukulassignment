import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tse2.mm.bing.net/th?id=OIP.2Y9LHrMYVqw_qKyHlfvuXQHaES&pid=Api&P=0&h=180"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tse3.mm.bing.net/th?id=OIP.7KXbdcsH9BKcYhKmd8hymAHaEu&pid=Api&P=0&h=180"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tse2.mm.bing.net/th?id=OIP.ms50_iBST_Veoc19V73YHgHaEK&pid=Api&P=0&h=180"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
