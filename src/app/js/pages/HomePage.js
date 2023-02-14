import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeBanner from "../components/HomeBanner";
import ProductCarousel from "../components/FeatureCarousel";



import banner1 from '../../style/images/banner16.jpg';
import banner2 from '../../style/images/banner17.jpg';
import banner3 from '../../style/images/banner18.jpg';
import banner4 from '../../style/images/banner19.jpg';

import DealsOffersBg  from '../../style/images/background10.jpg'; 



export default function HomePage() {

  const [banner, setBanner] = useState([]);
  const [productList, setProductList] = useState([]);
  
  const apiUrl = "https://6339831366857f698fb72ce1.mockapi.io/api/home_banners";

  const productApiUrl = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/products"

  

  useEffect(()=> {
    getBanners();
    getProducts();
  }, [])

  const getBanners = async () => {
      let result  = await axios.get(apiUrl);
      console.log('Homepage', result.data);
      setBanner(result.data);
  }
  const getProducts = async () => {
    let result  = await axios.get(productApiUrl);
    console.log('Product Home', result.data);
    setProductList(result.data);
}


  function renderSpecialsProducts() {
    return (
      <>
      <section>
        <div className="container">
        <div className="our-products specials-products">
          <h4 className="section-title text-center">Specials Products</h4>
          <p className="section-des text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula nisl rhoncus vitae. Sed consectetur sapien velit</p>
          <ProductCarousel Products={productList} slidesPerView={4} />
        </div>
      </div>
    </section>
      </>
    );
  }

  function renderHomeOffer() {
    return (
      <>
       <div className="container">
       <div className="row main-banner">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="banner banner-effect1">
              <a href="#">
                <img className="img-fluid" src={banner1} alt="" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-ss-12">
                <div className="banner banner-effect1">
                  <a href="#">
                    <img className="img-fluid" src={banner2} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-ss-12">
                <div className="banner banner-effect1">
                  <a href="#">
                    <img className="img-fluid" src={banner3} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="banner banner-effect1 item-last">
                  <a href="#">
                    <img className="img-fluid" src={banner4} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </>
    );
  }

  function renderDealsOffers() {
    return (
      <>
      <div className="DealsOffers" style={{backgroundImage: `url(${DealsOffersBg})`}}>
			<div className="banner-info">
				<h4 className="subtitle">Get a new look!</h4>
				<h3 className="title">Back To School 2017 Kid’s Clothing</h3>
				<a href="#" className="btn btn-primary">Shop Now</a>
			</div>
		</div>
      
      </>
    );
  }

  function renderFeatureBox() {
    return(
      <>
      <div className="container featrue-box-list">
			<div className="row">
				<div className="col-ss-12 col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div className="featrue-box">
						<div className="block-icon"><a href="#"><i className="fa fa-truck"></i></a></div>
						<div className="block-inner">
							<h3 className="title">Free Shipping India</h3>
							<p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula.</p>
						</div>
					</div>
				</div>
				<div className="col-ss-12 col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div className="featrue-box">
						<div className="block-icon"><a href="#"><i className="fa fa-indian-rupee-sign"></i></a></div>
						<div className="block-inner">
							<h3 className="title">30 Days Money Back</h3>
							<p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula.</p>
						</div>
					</div>
				</div>
				<div className="col-ss-12 col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div className="featrue-box">
						<div className="block-icon"><a href="#"><i className="fa fa-shield-alt"></i></a></div>
						<div className="block-inner">
							<h3 className="title">Payment Secured</h3>
							<p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    );
  }

 
  return (
    <>
      <HomeBanner bannerData={banner} />
      {renderHomeOffer()}
      {renderSpecialsProducts()}
      {renderDealsOffers()}
      {renderSpecialsProducts()}
      {renderFeatureBox()}

    </>
  ); 
}
