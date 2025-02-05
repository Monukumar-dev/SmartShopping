import React, { useEffect, useState } from "react";
import axios from "axios";

import HomeBanner from "../components/HomeBanner";
import ProductCarousel from "../components/FeatureCarousel";

import banner1 from '../../style/images/banner16.jpg';
import banner2 from '../../style/images/banner17.jpg';
import banner3 from '../../style/images/banner18.jpg';
import banner4 from '../../style/images/banner19.jpg';

import DealsOffersBg  from '../../style/images/background10.jpg';

import { BASE_URL } from "../utils/Url";

import {shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/action/productAction";


export default function HomePage() {
  
  const store = useSelector(connectToStore, shallowEqual);
  const dispatch = useDispatch();

  const [banner, setBanner] = useState([]);
 
  const getBanners = async () => {
      let result  = await axios.get(`${BASE_URL}/banners/`);
      setBanner(result.data);
  }

  useEffect(()=> {
    getBanners();
  }, [])

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);



  function renderTrendingBags() {
    const { productList } = store
    let specialsProduct = productList?.filter(product => product?.category.toLowerCase() === 'bag');
    if (!specialsProduct) return;

    return (
      <>
      <section>
        <div className="container">
        <div className="our-products specials-products">
          <h4 className="section-title text-center"> Trending Bags</h4>
          <p className="section-des text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula nisl rhoncus vitae. Sed consectetur sapien velit</p>
          <ProductCarousel Products={specialsProduct} slidesPerView={5} />
        </div>
      </div>
    </section>
      </>
    );
  }

  function renderTrendingMen() {
    const { productList } = store

    let specialsProduct = productList?.filter(product => 
      ['men', 'shose', 'electronic'].includes(product?.category?.toLowerCase()) 
    );
    if (!specialsProduct) return;

    return (
      <>
      <section>
        <div className="container">
        <div className="our-products specials-products">
          <h4 className="section-title text-center"> Trending Men's Products</h4>
          <p className="section-des text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque risus lacus, vitae vehicula nisl rhoncus vitae. Sed consectetur sapien velit</p>
          <ProductCarousel Products={specialsProduct} slidesPerView={5} />
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
                <img className="img-fluid w-100" src={banner1} alt="" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-ss-12">
                <div className="banner banner-effect1">
                  <a href="#">
                    <img className="img-fluid w-100" src={banner2} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-ss-12">
                <div className="banner banner-effect1">
                  <a href="#">
                    <img className="img-fluid w-100" src={banner3} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="banner banner-effect1 item-last">
                  <a href="#">
                    <img className="img-fluid w-100" src={banner4} alt="" />
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
      {renderTrendingBags()}
      {renderDealsOffers()}
      {renderTrendingMen()}
      {renderFeatureBox()}

    </>
  ); 
}


// storeSelectors.js
const connectToStore = (state) => ({
  productList: state.product.data?.products,
  filters: state.product.filters,
  status: state.product.status,
  total: state.product.data.total,
});