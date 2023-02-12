import React, { } from 'react';
import Product from './Product';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation,Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function ProductCarousel(props) {

    const productItems = props.Products;


    return (
        <div className="ProductCarousel position-relative">
            <Swiper className='ProductCarouselSlider'
                spaceBetween={30}
                slidesPerView={props.slidesPerView}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay,Navigation,Pagination]}
                freeMode={true}
                >
				
				{
					productItems.map((item) => (
						<SwiperSlide key={item.id}>
							<Product data={item} />
                		</SwiperSlide>
				))
				}
                
            </Swiper>
        </div>
    )
}