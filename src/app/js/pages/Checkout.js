import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../../style/scss/cart.scss';

import rupeeIcon from '../../style/images/icons/rupee.png';
import paytmIcon from '../../style/images/icons/paytm.png';
import creditCardIcon from '../../style/images/icons/creditCard.png';
import netBankingIcon from '../../style/images/icons/netBanking.png';
import payUIcon from '../../style/images/icons/payU.png'; 






export default function Checkout() {

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
                <div className="c-check c-check-right pl-0 border-0">
                    <div className="check-title she-clearfix">
                        <h4>Order Summary</h4>
                    </div>
                    <div className="c-order-summary">
                        <div>
                            {/* <!--<div className="summary-item she-clearfix">
                                <span className="she-fl">Retail Price:</span> <del className="she-fr pull-right">₹125989</del>
                            </div>--> */}
                            <div className="summary-item total-item she-clearfix">
                                <span className="she-fl">Subtotal:</span>
                                <span className="pull-right">₹98889</span>
                            </div>
                            <div className="summary-item she-clearfix">
                               <span className="she-fl">Shipping Price: </span>
                               <span className="pull-right">₹0</span>
                            </div>
							
                          <hr className="checkout_separator divider" />
                          <div className="summary-item she-clearfix">
                                <span className="she-fl">Grand Total: </span>
                                <span className="pull-right cart-price-t" id="totalValue">₹98889</span>
                          </div> 
                        </div>
                        <hr className="solid my-4" />
                        <div className="form-row">
                            <div className="form-group col-lg-12">
                                <label className="font-weight-bold text-dark text-2">Coupon Code</label>
                                <div className="input-group">
                                 <input type="text" id="code" name="couponCode" className="form-control pincode_input" placeholder="Coupon Code" />
                                  <div className="input-group-prepend">
                                   <button className="btn input-group-text text-2 py-1 px-4" type="button" id="coupon_btn"> 
                                     <strong>Apply</strong></button>
                                    {/* <span className="input-group-text text-uppercase" id="basic-addon1">Apply</span> */}
                                  </div>
                                </div>
                                <small className="f-12">Apply code <strong>SW300</strong> to get ₹300 off for your first order.</small>
                            </div>									
                        </div>
                        <div className="check-btn mt-4">
                            <button type="submit" className="btn btn-primary w-100"> PLACE ORDER </button>
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
      <div className="col-12 col-lg-8">
        
          <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
              <h4 className="mb-0 text-uppercase">Shipping Address</h4>
              <a type="button" className="btn btn-primary py-2">Add New Address</a>
          </div>
                {/* <!--ADDRESS-CARDS--> */}
                <div className="address-cards">
                  <div className="row address-cards-box">
                    <div className="col-1 col-md-1 col-sm-1 p-0 text-center">
                      <div className="">
                        <input type="radio"
                        id="customRadio1"
                        name="customRadio"
                        className="custom-control-input address_radio_select"
                        data-addr="Central Rd N, Ganesh Nagar, Airoli Naka, Airoli, Navi Mumbai, Maharashtra 400708" checked />
                      </div>
                    </div>
                    <div className="col-11 col-md-11 col-sm-11 pl-0 mp-0">
                      <label className="custom-control-label" for="customRadio1">
                        <strong> Monu | 9868612445 <span className="primary-clr small">(Default)</span></strong>
                      </label>
                      <p className="address-data">
                        Bada Durga Mandir, Bagoba Nagar Kalwa East Thane Navi MumbaiGreater Thane Maharashtra India 400605</p>
                    </div>
                  </div>

                  <div className="row address-cards-box">
                    <div className="col-1 col-md-1 col-sm-1 text-center p-0">
                      <div className="">
                        <input type="radio"
                        id="customRadio2"
                        name="customRadio"
                        className="custom-control-input address_radio_select"
                        data-addr="Bada Durga Mandir, Bagoba Nagar Kalwa East Thane Navi MumbaiGreater Thane Maharashtra India 400605" />
                        
                      </div>
                    </div>
                    <div className="col-11 col-md-11 col-sm-11 pl-0 mp-0">
                      <label className="custom-control-label" for="customRadio2">
                        <strong> Monu Kumar | 9868612445 </strong>
                      </label>
                      <p className="address-data"> Central Rd N, Ganesh Nagar, Airoli Naka, Airoli, Navi Mumbai, Maharashtra 400708</p>
                    </div>
                  </div>
                  {/* <!--address-cards-box--> */}

                </div> 
                {/* <!-- END address-cards--> */}
              </div>

              
              <div className="mb-5">
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                  <h4 className="m-0 text-uppercase">Review Payment</h4>
              </div>
                <div id="cartItemsList">
                  {renderCartItem()}
                </div>
              </div>
              <div className="mb-5">
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                  <h4 className="m-0 text-uppercase">Payment</h4>
              </div>
              <form action="" id="frmPayment" method="post">
                  <div className="form-row">
                    <div className="form-group col">
                      <div className="custom-control custom-radio">
                        <input name="payment-radio" type="radio" className="custom-control-input" id="COD" />
                        <label className="custom-control-label" for="COD">
                          <img className="img-fluid" src={rupeeIcon} alt="COD" />
                          Cash On Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <div className="custom-control custom-radio">
                        <input name="payment-radio" type="radio" className="custom-control-input" id="Debit-Credit-Card" />
                        <label className="custom-control-label" for="Debit-Credit-Card">
                          <img className="img-fluid" src={creditCardIcon} alt="Debit/Credit Card" />
                          Domestic Debit/Credit Card
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <div className="custom-control custom-radio">
                        <input name="payment-radio" type="radio" className="custom-control-input" id="Net-Banking" />
                        <label className="custom-control-label" for="Net-Banking">
                          <img className="img-fluid" src={netBankingIcon} alt="Net Banking" />
                          Net Banking
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <div className="custom-control custom-radio">
                        <input name="payment-radio" type="radio" className="custom-control-input" id="PayU" />
                        <label className="custom-control-label" for="PayU">
                          <img className="img-fluid" src={payUIcon} alt="Net Banking" />
                          PayU Wallet UPI, Tez
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                                <div className="form-group col">
                                    <div className="custom-control custom-radio">
                                        <input name="payment-radio" type="radio" className="custom-control-input" id="Wallets" />
                                        <label className="custom-control-label" for="Wallets">
                                            <img className="img-fluid" src={paytmIcon} alt="Wallets" />
                                            E-Wallet(PhonePe, Amazon Pay...)
                                        </label>
                                    </div>
                                </div>
                  </div>
                </form>
              </div>
         
        
      </div>
    );
  }


 
  return (
    <div className="main-content grid-category-page inner-page">
		<div className="container">
    <div className="row checkout-page">
    {renderLeftContent()}
    {renderRightContent()}
    
   </div>
    
		</div>
	</div>
  ); 
}
