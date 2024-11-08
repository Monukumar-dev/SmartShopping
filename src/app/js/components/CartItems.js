import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from "../redux/slice/cartSlice";

//import * as abc from "../redux/slice/cartSlice"; 


export default function CartItems(props) {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state)=> state.allCart)

    return (
        <>
        {
            cartItems.map((item) => (
              <div className="item-base-item" key={item.id}>
                          <div className="itemContainer-base-item p-2">
                            <div className="itemContainer-base-itemLeft">
                              <div className="LazyLoad is-visible">
                                <img className="image-base-imgResponsive" src={item.image} alt={item.title} />
                              </div>
                            </div>
                            <div className="itemContainer-base-itemRight">
                              <div className="itemContainer-base-details">
                                <div className="itemContainer-base-itemName">
                                  <a className="itemContainer-base-itemLink" href="#">{item.title}</a>
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
                                            <span style={{ backgroundColor: `${item.color}` }}>
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
                                    <div><i className="fa fa-inr" aria-hidden="true" />{item.price}</div>
                                  </div>
                                  <div className="itemContainer-base-discountStrikedAmount mt-1">
                                    <div className="cart-quantity text-right mt-1">
                                      <button type="button" className="sub" onClick={()=> dispatch(decreaseItemQuantity(item.id))}>
                                        <i className="fa fa-minus" aria-hidden="true" />
                                      </button>
                                      <input className="quantity" type="number" value={item.quantity} min={1} onChange={() => null} />
                                      <button type="button" className="add" onClick={()=> dispatch(increaseItemQuantity(item.id))}>
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
                                <button className="inlinebutton-base-actionButton" onClick={()=> dispatch(removeItem(item.id))}>
                                  Remove
                                </button>
                              </div>
                              <div className="inlinebutton-base-action itemContainer-base-itemActions">
                                <button
                                  className="inlinebutton-base-actionButton  wishlistButton">
                                  Move to WishList
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
    
    
            ))
           
            }
            </>
    );

}