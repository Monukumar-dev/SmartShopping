import React, { useState } from "react";


export default function CartSidebar (props) {
    const [miniCart, setMiniCart] = useState(false);

    return (
        <>
    <div className="minicartSidebar open">
      <div className="row">
        <div className="col-10">
          <div className="align-items-center d-flex">
            <p className="m-0">
              <i className="material-icons dp48">local_mall</i>
            </p>
            <h2 className="ml-3 f-18 mb-0 mt-n1">Your Cart</h2>
          </div>
        </div>
        <div className="col-2">
          <a
            href="javascript:void(0);"
            className="miniCartBtn close"
            title="Close"
          >
            <span>×</span>
          </a>
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
                        <input
                          type="hidden"
                          name="user_id_cart"
                          className="user_id_cart"
                          defaultValue="61b80d4e4282005a5f20ae0231762eda"
                        />
                        <div className="itemContainer-base-itemLeft">
                          <div className="LazyLoad is-visible">
                            <img
                              className="image-base-imgResponsive"
                              src="https://storage.googleapis.com/qfix-shopping/shop/static/pub/media/catalog/product/imagemasterlist/images/image/directimages/263921-2_10-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti.jpg?GoogleAccessId=gcs-service-account%40burnished-stone-180612.iam.gserviceaccount.com&Expires=1673892135&Signature=igv3BCkJa2Gt58fdX85irs%2BLE8gqMslrUaY2YsYqcX%2F%2Bj8gJW682ok18XWsR0C36KBQtdVwvqyb%2FczaFdNbbetPf8AIdFje%2Br1GJzW0fS9X%2FbYNNLtlzDblcyvEGjgAto3mSn5J7pF6nqc84OannrhdUDscyoluFuQhq%2B3NT9Cj1TUQY2FsC6RHF8ko0lOpN2ljqz8NZ62%2Fxr03KOFSOKWk4I%2F0M3fwbkvlgq5JBaQLJwPm5M64A1fBtWjQhgC1kArh%2BMl9JFQ3EfZXgzl6Iic5HszqX3Dm5Ylp2r0QxqyVdce1Dc8zdHEbfdjNcNDFg%2Bc3QQjnfpXtfNimsHIsBow%3D%3D"
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
                                {" "}
                              </div>
                              <div className="itemComponents-base-quantity mr-1">
                                <div className="gd-color">
                                  <span>Color:</span>
                                  <div className="c-opt">
                                    <div className="opt-color">
                                      <a href="#" className="color-img-box">
                                        <span style={{ backgroundColor: "" }}>
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
                                <div>
                                  <i className="fa fa-inr" aria-hidden="true" /> 1
                                </div>
                              </div>
                              <div className="itemContainer-base-discountStrikedAmount mt-1">
                                <div className="cart-quantity text-right mt-1">
                                  <button
                                    type="button"
                                    id="sub"
                                    className="sub"
                                    pid={67256}
                                    page="minicart"
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="quantity"
                                    type="number"
                                    id={1}
                                    defaultValue={1}
                                    min={1}
                                  />
                                  <button
                                    type="button"
                                    id="add"
                                    className="add"
                                    pid={67256}
                                    page="minicart"
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
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
                    </div>{" "}
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
                  <span>
                    <i className="fa fa-inr" aria-hidden="true" />
                  </span>
                  <span className="grand_total_cart">1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto text-center">
              <a className="btn cus-primary-btn-outline" href="/cart">
                <span>View Cart</span>
              </a>
              <a
                href="/checkout"
                className="btn cus-primary-btn"
                title="Checkout"
              >
                <span onclick="addCustomerOrder('',)">Checkout</span>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* END cart-bottom */}
      </div>
    </div>
        
        </>
    );
}