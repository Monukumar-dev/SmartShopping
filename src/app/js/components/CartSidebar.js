import React, { useEffect, useState } from "react";
import '../../style/scss/cart.scss';

import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../redux/slice/cartSlice";

import CartItems from "../components/CartItems";


export default function CartSidebar (props) {

  const dispatch = useDispatch();

   const { cartItems, totalQty, totalPrice } = useSelector((state)=> state.allCart)

   useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

    const [miniCart, setMiniCart] = useState(props.CartSidebarToggle);

    useEffect(()=>{
      let {CartSidebarToggle} = props
      setMiniCart(CartSidebarToggle);
    },[props.CartSidebarToggle])  

    return (
    <>
    <div className={`minicartSidebar ${miniCart == true ? "open" : ""}`}>
      <div className="row">
        <div className="col-10">
          <div className="align-items-center d-flex">
            <p className="m-0 prymary-clr"><i className="fa-solid fa-bag-shopping"></i></p>
            <h5 className="ms-3 f-18 mb-0 mt-n1">Your Cart</h5>
          </div>
        </div>
        <div className="col-2">
          <button className="mb-0 bg-transparent border-0 close" onClick={props.CloseCartSidebar} title="Close"><span>×</span></button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 cart-middle">
          <div className="woo-entry mt-3">
            <div className="row mx-0 j-cart-list">
              <div className="col-12 c-check c-check-left c-check-bag j-check-bag p-0">
                <div className="j-shopbag-body">
                  <div id="cartItemsList">
                    <CartItems />
                    {/*end  item-base-item*/}
                  </div>
                </div>
              </div>
              {/*end col-md-8*/}
            </div>
            {/* end row */}
          </div>
          {/* end woo-entry */}
        </div>
      </div>
      {/* end cart-middle */}
      <div className="row">
        <div className="cart-bottom col-12" id="viewCartCheckoutBtn">
          <div className="row mx-0 grand-total-wrapper mb-4 align-items-center text-center">
            <div className="col-6">
              <p className="m-0 bold">
                <span>Cart Subtotal</span>
              </p>
            </div>
            <div className="col-6">
              {/* <p className="total-amount price"></p> */}
              <div className="amount price-container">
                <p className="align-items-center bold f-20 price mb-0">
                  <span><i className="fa fa-inr" aria-hidden="true" /></span>
                  <span className="grand_total_cart">{totalPrice}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto text-center">
              <a className="btn btn-primary me-1" href="/cart">View Cart</a>
              <a className="btn btn-primary ms-1" href="/checkout">Checkout</a>
            </div>
          </div>
        </div>
        {/* END cart-bottom */}
      </div>
    </div>
 </>
    );
}