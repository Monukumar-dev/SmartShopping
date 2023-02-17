import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import successIcon from '../../style/images/success.gif';







export default function ThankYou() {

    return (
    <div className="main-content">
		<div className="container">
            <div className="row">
                <div className="col-12 col-md-7 mx-auto">
                    <div className="card mt-md-4 border-0">
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid" width="100px" height="auto" src={successIcon} alt="" />
                            </div>
                            <div className="billing-details text-center">
                               <h4 className="mb-2 mt-4">Order Placed!</h4>
                                <p className="f-18">
                                  Your order was placed successfully Thank you for buying.
                                </p>
                                <div className="order-details my-4 text-start">
                                  <p><strong>Product Name :</strong> U.S. Polo Assn Men Grey Solid Sneakers</p>
                                  <p><strong>Qty :</strong> 2</p>
                                  <p><strong>Payment Mode :</strong> PHONEPE</p>
                                </div>
                                 <div className="shopping-cart-btns text-center">
                                    <Link to="/" className="py-2 btn btn-primary text-uppercase mr-3">Homepage</Link>
                                    <Link to="/" className="py-2 btn btn-outline-primary ms-2 text-uppercase">View My Order</Link>
                                </div> 
                            </div>
                            
                        
                        </div>
                    </div> 
                    </div> 
            </div> 
            </div>
	</div>
  ); 
}
