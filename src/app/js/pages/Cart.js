import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import '../../style/scss/cart.scss';

import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../redux/slice/cartSlice";
import CartItems from "../components/CartItems";
import CartEmpty from "../components/CartEmpty";


export default function Cart() {

  const dispatch = useDispatch();
  const { cartItems, totalQty, totalPrice } = useSelector((state)=> state.allCart)

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);


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
                          <span className="she-fl">Item</span> 
                          <span className="pull-right total cart-price-t">
                            <span className="cart-price-stotal">{totalQty}</span>
                          </span>
                      </div>
                  
                      <div className="summary-item she-clearfix">
                        <span className="she-fl">Shipping </span>
                        <span className="pull-right">&#8377;0</span>
                      </div>
                      <div className="summary-item she-clearfix">
                        <span className="she-fl">Total </span>
                        <span className="pull-right cart-price-t">
                          <span className="cart-price-gtotal">&#8377;{totalPrice}</span>
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


  function renderLeftContent() {
    return (
      <div className="col-sm-8 c-check c-check-left c-check-bag j-check-bag pl-0">
        <div className="check-title she-clearfix j-shopbag-title">
            <h4>Shopping Cart</h4>
            <span>Prices are subject to change based on the price in effect the day you checkout.</span>
        </div>

    <div className="j-shopbag-body">
    <div id="cartItemsList">
        <CartItems />
    </div>
</div>
</div>
    );
  }



       {/* {cartItems.length>0 && renderRightContent()}       */}

  return (
    <div className="main-content grid-category-page inner-page">
		<div className="container">
      <div className="row mx-0 j-cart-list">
        {cartItems.length>0 ? <>{renderLeftContent()}{renderRightContent()}</> : <CartEmpty />}
      </div>
		</div>
	</div>
  ); 
}
