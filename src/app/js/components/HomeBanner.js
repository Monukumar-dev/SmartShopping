import React, {  } from 'react';
import { Link } from 'react-router-dom';
import {handleImageError} from '../../js/utils/Utils';
import defualtImg from '../../style/images/defultImg.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation,Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function HomeBanner(props) {

    const bannerItems = props.bannerData;

    return (
        <div className="HomeBanner position-relative">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 50000,
                    disableOnInteraction: false,
                  }}
                loop={true}
                pagination={{
                    clickable: true,
                  }}
                navigation={true}
                modules={[Autoplay,Navigation,Pagination]}
                freeMode={true}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
                >   
                
                {
                  bannerItems.length>0 ? bannerItems.map((item, i) => (

                        <SwiperSlide key={i}>
                            <img 
                            className='sliderImg img-fluid'
                            onError={(event) => handleImageError(event, defualtImg)}
                            src={item.imageUrl}  />
                            <div className="slide-content">
                                <h3 className="title">{item.title}</h3>
                                <h4 className="subtitle">
                                    {item.desc ? item.desc : 'Discover the collection as styled by fashion in our new season campaign.'}
                                </h4>
                                <Link to={item.desc} className="btn btn-primary px-4 py-2">SHOP NOW</Link>
                                {/* <Link href="#" className="btn btn-outline-primary ms-2">View Promotion</Link> */}
                            </div>
                        </SwiperSlide>

                    )) : <h2 className='text-center'>Not found any slider 😔</h2>
                } 
            </Swiper>
        </div>
    )
}