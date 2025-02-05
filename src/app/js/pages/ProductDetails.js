import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../../style/scss/productDetails.scss';

import FeatureCarousel from '../components/FeatureCarousel';
import ProductGallery from "../components/ProductGallery";

import Sneakers1 from '../../style/images/Sneakers1.jpg';
import Sneakers2 from '../../style/images/Sneakers2.jpg';
import Sneakers3 from '../../style/images/Sneakers3.jpg';


import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {addToCart, increaseItemQuantity, decreaseItemQuantity, getCartTotal } from "../redux/slice/cartSlice";


import { getProductsById } from "../redux/action/productAction";
import { addToWishlist } from "../redux/slice/wishlistSlice";

import useFetch from "../services/useFetch";
import Loader from "../components/Loader";



export default function ProductDetails() {

  const store = useSelector(connectToStore, shallowEqual);
 const {cartItems, product, productStatus, totalQty } = store;
 //const {cartItems, totalQty } = useSelector((state)=> state.allCart);
 //const {data:product, status} = useSelector((state) => state.product);

 //console.log("ProductData", product);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=> {
    dispatch(getProductsById(params.id));
  }, [params])

  
  const curCartItem = cartItems.findIndex((item)=> item.id === params.id);
  
  const { data, error, loading } = useFetch(`/products`);

  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }
  
  const relatedProducts = data?.products ? data?.products.filter((item) => item?.category === product?.category): [];
  
  const updatedProducts = relatedProducts.map(product => ({
    ...product,
    coverImage: `../${product.coverImage.replace(/\\/g, '/')}`, // Add '../' and replace backslashes
    thumbImages: product.thumbImages.map(img => `../${img.replace(/\\/g, '/')}`) // Add '../' to each image
  }));

 
  return (
    <div className="main-content product-single-page">
		<div className="container pb-5">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
        <li className="breadcrumb-item"><Link href="/">Products</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{product?.title}</li>
      </ol>
    </nav>

			<div className="product-single-content">
				<div className="about-product row">
					<div className="details-thumb col-md-6">
           <ProductGallery data={product ? product : [] } />
					</div>
					<div className="details-info col-md-6">
						<Link className="product-name" href="#">{product?.title} </Link>
						<div className="rating">
							<ul className="list-star">
								<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-star-half-alt" aria-hidden="true"></i></a></li>
							</ul>
							<span className="text">( Be the firt person to review this item )</span>
						</div>
						<div className="price">
              <span className="ins">
                <i className="fas fa-regular fa-indian-rupee-sign"></i>{product?.price}</span>
              <span className="pdp-mrp"><s>₹1999</s></span>
              <span className="pdp-discount primary-clr">(50% OFF)</span>
            </div>
            <p className="pdp-selling-price"><span className="pdp-vatInfo">inclusive of all taxes</span></p>

						<div className="des">{product?.description}</div>

            <div className="colors-container">
                  <p className="attributeHeading"><strong>More Colors</strong></p>
                  <Link to={"#"}>
                    <img className="colors-image" src={Sneakers1} />
                  </Link>
                  <Link to={"#"}>
                    <img  className="colors-image" src={Sneakers2} />
                  </Link>
                  <Link to={"#"}>
                    <img className="colors-image" src={Sneakers3}  />
                  </Link>
              </div>

            <div className="size-container">
              <p className="attributeHeading"><strong>select size</strong></p>
              <div className="size-tab-content">
                
                    <button type="button" className="size-select-button"data-size={product?.size }>{product?.size }</button>
                   
                  {/* <button type="button" className="size-select-button"data-size="6">6</button>
                  <button type="button" className="size-select-button active"data-size="7">7</button>
                  <button type="button" className="size-select-button"data-size="8">8</button>
                  <button type="button" className="size-select-button"data-size="9">9</button>
                  <button type="button" className="size-select-button"data-size="10">10</button>
                  <button type="button" className="size-select-button"data-size="11">11</button> */}
              </div>
            </div>

						<div className="quantity">
              <input
                className="input-text qty text"
                type="text"
                size="4"
                value={
                  cartItems.find((item) => item._id === product._id)?.quantity || 1
                }
                onChange={() => null}
                title="Qty"
                name="quantity"
              />
              <div className="group-quantity-button">
                <Link className="plus" to="#" onClick={() => dispatch(increaseItemQuantity(product.id))}>
                  <i className="fa fa-sort-asc" aria-hidden="true"></i>
                </Link>
                <Link className="minus" to="#" onClick={() => dispatch(decreaseItemQuantity(product.id))}>
                  <i className="fa fa-sort-desc" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            
              { curCartItem>=0 ? <Link to="/cart" className="add-to-cart border-0">GO TO CART </Link> : 
              <button className="add-to-cart border-0" onClick={()=> dispatch(addToCart(product))}>ADD TO CART</button>
              }
              
            
            <ul className="group-button ps-0">
              <li>
                <p className="curser-pointer" onClick={()=> dispatch(addToWishlist(product))}>
                  <i className="fal fa-regular fa-heart"></i> Add to Wishlist
                </p>
              </li>
              <li><a href="#"><i className="fas fa-regular fa-arrows-rotate"></i> Add to Compare</a></li>
              <li><a href="#"><i className="fa-regular fa-envelope"></i> Email to a Friend</a></li>
            </ul>
					</div>
				</div>
			</div>
		</div>

		<div className="infomation-form">
			<div className="container">
        <Tabs defaultActiveKey="Description" transition={false} id="ProductInfoTabs" className="mb-3 ProductInfoTabs">
          <Tab eventKey="Description" title="Description">
            <p>Pellentesque in nibh malesuada, molestie nisl id, aliquam magna. Nullam dapibus molestie tellus, eget sollicitudin nisl
            rutrum vitae. Aliquam vitae arcu eros. In nec tortor felis. Ut maximus, nisi vitae dapibus consectetur, erat purus molestie 
            odio, et porta massa neque non lorem. Praesent dictum mi vitae turpis blandit, in eleifend purus imperdiet. Praesent nunc
            sem, laoreet quis augue quis, egestas commodo risus.</p>

			    	<p>Aliquam tempor maximus laoreet. Aliquam eu pretium metus, vitae lacinia tellus. Fusce ac diam ipsum.
              Sed finibus diam vel magna elementum malesuada. Quisque rutrum felis ac tellus dictum gravida.</p>
            
          </Tab>
          <Tab eventKey="AdditionalInformation" title="Additional Information">
              <p>Lorem ipsum dolor sit amet isse potenti sesquam ante aliquet lacusemper elit.
                Cras neque nulla convallis non comodo euismod nonsese isse potent.</p>
              <ul>
                <li>Soft-touch jersey</li>
                <li>Crew neck </li>
                <li>Logo print</li>
                <li>Regular fit - true to size</li>
              </ul>
              <ul>
                <li>Machine wash</li>
                <li>100% Cotton</li>
                <li>Our model wears a size Medium and is 185.5cm/6'1" tall</li>
              </ul>
          </Tab>
          <Tab eventKey="CustomerReviews" title="Customer Reviews">
          <div className="custom-review">
			    				<div className="row mt-5">
			    					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			    						<div className="customer-review">
			    							<h3 className="title supper-title">CUSTOMER REVIEWS <span className="count">( 2 Reviews )</span></h3>
			    							<ul className="list-review">
			    								<li className="review-item">
			    									<div className="character">
			    										<div className="rating">
															<ul className="list-star">
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
															</ul>
														</div>
														<a href="#" className="author">Christiana Doe</a>
														<div className="time-review">20 Dec 2015</div>
			    									</div>
			    									<div className="review-content">
			    										<h3 className="title">What a Beautiful Design</h3>
			    										<p className="content">Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignimos ducimus qui blanditiis praesentium voluptatum</p>
			    									</div>
			    								</li>
			    								<li className="review-item">
			    									<div className="character">
			    										<div className="rating">
															<ul className="list-star">
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
																<li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
															</ul>
														</div>
														<a href="#" className="author">Jonathan Doe</a>
														<div className="time-review">20 Dec 2015</div>
			    									</div>
			    									<div className="review-content">
			    										<h3 className="title">Amazing Minimal theme</h3>
			    										<p className="content">Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignimos ducimus qui blanditiis praesentium voluptatum</p>
			    									</div>
			    								</li>
			    							</ul>
			    						</div>
			    					</div>
			    					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			    						<div className="add-review">
			    							<h3 className="title supper-title">ADD A REVIEW</h3>
			    							<div className="row">
				    							<div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
				    								<input type="text" className="form-control mb-3" placeholder="Your name" />
				    							</div>
				    							<div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
				    								<input type="text" className="form-control mb-3" placeholder="Your email" />
				    							</div>
				    						</div>
			    							<textarea rows="6"  className="form-control" placeholder="Your review"></textarea>
                        <div className="rating">
                          <ul className="list-star">
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
											  <a href="#" className="btn btn-primary">SUBMIT</a>
			    						</div>
			    					</div>
			    				</div>
			    			</div>
          </Tab>
        </Tabs>

			</div>
		</div>
		<div className="related-product py-4">
			<div className="container">
				<h3 className="supper-title mb-4 text-center">Related Products</h3>
        <FeatureCarousel Products={updatedProducts} slidesPerView={4} />
			</div>
		</div>
	</div>
  
  ); 
}


  // storeSelectors.js
  const connectToStore = (state) => ({
    cartItems: state.allCart.cartItems,
    totalQty: state.allCart.totalQty,
    //product: state.product.data?.products,
    product: state.product.data.product,
    productStatus: state.product.status,
    // showPageLoader: state.payments.showPageLoader,
    // paymentStatus: state.payments.paymentStatus,
    // receiptEmailed: state.payments.receiptEmailed,
    // uiPaymentConfigLabel: state.uiConfig.uiPaymentConfigLabel,
    // instituteDetails: state.institute.instituteDetails,
    // appInfo: state.payments.appInfo,
  });