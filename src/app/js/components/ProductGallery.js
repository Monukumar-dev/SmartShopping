import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductGallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { thumbImages, coverImage } = props.data;

  return (
    <div className="row">
      <div className="col-12 col-md-12">
        <Swiper
          style={{
            "--swiper-navigation-color": "#333",
            "--swiper-pagination-color": "#333",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {coverImage &&
            <SwiperSlide>
              <img className="img-fluid w-100" src={`../${coverImage}`} alt={`Product Cover`} />
            </SwiperSlide>
          }

          {thumbImages &&
            thumbImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img className="img-fluid w-100" src={`../${img}`} alt={`Product ${index}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
