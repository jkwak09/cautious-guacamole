import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import carouselStyles from "./carousel.module.css";


import Image from "./image.js";



function HomeCarousel() {

  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
        <Image alt="banner 1" filename="banner1.jpg" class={carouselStyles.carouselBanner} />
        {/* <img src="../images/banner1.jpg" alt="banner1" className={carouselStyles.carouselBanner} /> */}
        {/* <div className={carouselStyles.firstImage}></div> */}

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        /> */}
        <Image alt="banner 2" filename="banner2.jpg" class={carouselStyles.carouselBanner} />
        {/* <div className={carouselStyles.secondImage}></div> */}
        {/* <img src="../images/banner2.jpg" alt="banner2" className={carouselStyles.carouselBanner} /> */}

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        /> */}

        <Image alt="banner 3" filename="banner3.jpg" class={carouselStyles.carouselBanner} />
        {/* <img src="../images/banner3.jpg" alt="banner3" className={carouselStyles.carouselBanner} /> */}

        {/* <div className={carouselStyles.thirdImage}></div> */}

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};

export default HomeCarousel;