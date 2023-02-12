import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../../style/scss/cart.scss';




export default function Cart() {

  const [productList, setProductList] = useState([]);

  const productApiUrl = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/products"

  useEffect(()=> {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result  = await axios.get(productApiUrl);
    console.log('Product Home', result.data);
    setProductList(result.data);
}


  function renderRightContent() {
    return (
      <div className="col-sm-4 j-shopbag-sum p-0">
      <div id="Order-Summary" className="j-vue-price">
          <div className="c-check c-check-right">
              <div className="check-title she-clearfix">
                  <h4>Order Summary</h4>
              </div>
              <div className="c-order-summary">
                  <div>
                      <div className="summary-item she-clearfix">
                          <span className="she-fl">Subtotal</span> 
                          <span className="pull-right total cart-price-t">
                            <span className="cart-price-stotal">&#8377;8000</span>
                          </span>
                      </div>
                  
                      <div className="summary-item she-clearfix">
                        <span className="she-fl">Shipping </span>
                        <span className="pull-right">&#8377;0</span>
                      </div>
                      <div className="summary-item she-clearfix">
                        <span className="she-fl">Total </span>
                        <span className="pull-right cart-price-t">
                          <span className="cart-price-gtotal">&#8377;8000</span>
                        </span>
                      </div>
                  </div>
        
                  <div className="check-btn mt-4">
                        <Link to={'/checkout'} type="button" className="btn btn-primary w-100 py-2" title="checkout securely now"> Checkout </Link>
                        <p className="coupon-tip">Apply a <strong>Coupon Code,</strong> on the next step.</p>
                  </div>
                  <div className="accept-bank j-accept-bank">
                      <p>we accept:</p>
                      <div className="bank-img">
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282731863050395099.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282735813528628258.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282732803587566708.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282732983375743706.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/1528273151799711689.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282731342688549608.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/15282733623802850603.png" className="c-img-con-m" />
                      <img src="//img.ltwebstatic.com/origin/images2_pi/2018/06/06/1528273375102209673.png" className="c-img-con-m" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }

  function renderCartItem () {
    return(
      <div className="item-base-item">
                      <div className="itemContainer-base-item p-2">
                        <div className="itemContainer-base-itemLeft">
                          <div className="LazyLoad is-visible">
                            <img
                              className="image-base-imgResponsive"
                              src="https://assets.ajio.com/medias/sys_master/root/20210403/y4NK/6068674b7cdb8c1f14751e8f/-473Wx593H-461083532-green-MODEL2.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="itemContainer-base-itemRight">
                          <div className="itemContainer-base-details">
                            <div className="itemContainer-base-itemName">
                              <a className="itemContainer-base-itemLink" href="">
                                Colgate Strong Teeth Anticavity Toothpaste With
                                Amino Shakti, 200 g
                              </a>
                            </div>
                            <div className="itemContainer-base-sizeAndQty">
                              <div className="itemComponents-base-size d-block">
                              <span>Size:</span> M
                              </div>
                              <div className="itemComponents-base-quantity mr-1">
                                <div className="gd-color">
                                  <span>Color:</span>
                                  <div className="c-opt">
                                    <div className="opt-color">
                                      <a href="#" className="color-img-box">
                                        <span style={{ backgroundColor: "RED" }}>
                                          &nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <div className="itemComponents-base-price itemComponents-base-bold itemContainer-base-amount">
                                <div><i className="fa fa-inr" aria-hidden="true" />1999</div>
                              </div>
                              <div className="itemContainer-base-discountStrikedAmount mt-1">
                                <div className="cart-quantity text-right mt-1">
                                  <button type="button" className="sub">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </button>
                                  <input className="quantity" type="number" defaultValue={1} min={1} />
                                  <button type="button" id="add" className="add">
                                    <i className="fa fa-plus" aria-hidden="true" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END itemContainer-base-itemRight*/}
                        <div className="inlinebutton-base-actions ">
                          <div className="inlinebutton-base-action itemContainer-base-itemActions">
                            <button
                              className="inlinebutton-base-actionButton itemContainer-base-inlineButton removeButton removeProductcart"
                              page="minicart"
                              pid={67256}
                            >
                              Remove
                            </button>
                          </div>
                          <div className="inlinebutton-base-action itemContainer-base-itemActions">
                            <button
                              className="inlinebutton-base-actionButton itemContainer-base-move itemContainer-base-inlineButton wishlistButton"
                              onclick="addProductToWishlist(67256,61b80d4e4282005a5f20ae0231762eda);"
                            >
                              Move to WishList
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
    )

  }

  function renderLeftContent() {
    return (
      <div className="col-sm-8 c-check c-check-left c-check-bag j-check-bag pl-0">
        <div className="check-title she-clearfix j-shopbag-title">
            <h4>Shopping Cart</h4>
            <span>Prices are subject to change based on the price in effect the day you checkout.</span>
        </div>

    <div className="j-shopbag-body">
    <div id="cartItemsList">
        {renderCartItem()}
    </div>
</div>
</div>
    );
  }


 
  return (
    <div className="main-content grid-category-page inner-page">
		<div className="container">
    <div className="row mx-0 j-cart-list">
    {renderLeftContent()}
    {renderRightContent()}
    
   </div>
    
		</div>
	</div>
  ); 
}
