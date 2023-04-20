import React from "react";
import CartEmptyIcons from '../../style/images/cartEmpty.svg';

export default function CartEmpty(props) {
    return (
        <>
       <div className="text-center">
          <img className="img-fluid w-50" src={CartEmptyIcons} />
          <h4>Your cart is <span className="warning">empty</span></h4>
          <p>Looks like you have not added anything to you cart. Go ahead & explore top categories.</p>
          <a href="/" className="btn btn-outline-primary px-4" title=""><span>Go to Home</span></a>
        </div>
        </>
    );

}