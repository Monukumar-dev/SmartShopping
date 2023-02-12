import React, { useEffect, useState } from "react";
import '../../style/scss/cart.scss';


export default function CartSidebar (props) {
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
                    <div className="item-base-item">
                      <div className="itemContainer-base-item p-2">
                        <div className="itemContainer-base-itemLeft">
                          <div className="LazyLoad is-visible">
                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/51kArHot7dL._SY450_.jpg" alt="image" />
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
                                {" "}
                              </div>
                              <div className="itemComponents-base-quantity mr-1">
                                <div className="gd-color">
                                  <span>Color:</span>
                                  <div className="c-opt">
                                    <div className="opt-color">
                                      <a href="#" className="color-img-box">
                                        <span style={{ backgroundColor: "red" }}>
                                          &nbsp;
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <div className="itemComponents-base-price itemComponents-base-bold itemContainer-base-amount">
                                <div>
                                  <i className="fa fa-inr" aria-hidden="true" /> 1
                                </div>
                              </div>
                              <div className="itemContainer-base-discountStrikedAmount mt-1">
                                <div className="cart-quantity text-right mt-1">
                                  <button type="button" id="sub" className="sub" pid={67256} page="minicart">
                                    <i className="fa fa-minus" aria-hidden="true" />
                                  </button>
                                  <input className="quantity" type="number" id={1} defaultValue={1} min={1} />
                                  <button type="button" id="add" className="add" pid={67256} page="minicart">
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
                            <button className="bg-transparent border-0" page="minicart" pid={67256}>Remove</button>
                          </div>
                          <div className="inlinebutton-base-action itemContainer-base-itemActions">
                            <button className="bg-transparent border-0">Move to WishList</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end  item-base-item*/}
                  </div>
                </div>
              </div>{" "}
              {/*end col-md-8*/}
            </div>
            {/* end row */}
          </div>{" "}
          {/* end woo-entry */}
        </div>
      </div>{" "}
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
                  <span className="grand_total_cart">1</span>
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