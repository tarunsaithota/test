import React from 'react';
import handbuk from "../Utils/handuk.jpg";
import handuk from "../Utils/handbuk.jpg";
import image1 from "../Utils/image1.jpg";
import image2 from "../Utils/image2.jpg";
import image3 from "../Utils/image3.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
    return (
      <div className="w-[60%]">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={handbuk} alt="1" />
          </div>
          <div>
            <img src={image3} alt="2" />
          </div>
          <div>
            <img src={image1} alt="2" />
          </div>
          <div>
            <img src={image2} alt="2" />
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default ImageCarousel;
  