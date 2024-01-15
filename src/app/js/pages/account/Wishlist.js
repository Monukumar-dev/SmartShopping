import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';
import wishlistEmpty from '../../../style/images/emptyWishlist.jpg'

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList, removeAll } from "../../redux/slice/wishlistSlice";
import { Link } from "react-router-dom";
import { ROOT } from "../../utils/Url";

export default function Wishlist() {
  const dispatch = useDispatch();
  const {wishList} = useSelector((state)=> state.wishlist);


  const renderEmptyWishlist = () => {
    return (
      <div className="text-center">
        <img className="img-fluid w-50 pb-3" src={wishlistEmpty}/>
        <h5 className="text-secondary text-uppercase">wishlist is empty</h5>
        <p className="text-center mb-0">seems like you don't have wishes here.<br/>make a wish!</p>
        <Link className="btn btn-primary px-4 mt-3 white" to={ROOT}>Start Shopping</Link>
      </div>
    )
  }
 
  return (
    <section>
      <div className="container">
      <div className="row m-my-account">
      <MyAccountSidebar />
  
  {/*  my accountsidebar */}
  <div className="col-xs-9 col-md-9 col-lg-9 c-addressbook">
  <h3>My Wishlist</h3>
  <div className="c-account-setting">
    {/*  product grids start here */}
    <div className="row align-items-center product-grid pt-3">

      {
        wishList.length>0 ? wishList.map((product) => (
                <div className="col-6 col-md-3 mb-3" key={product.id}>
                <div className="card">
                  {/*<span class="onsale">26% OFF</span>*/}
                  <a href="" className="text-clr">
                    <img className="card-img-top" src={product.img} alt="" />
                  </a>
                  <div className="card-body">
                    <a href="" className="text-clr">
                      <p className="card-text mb-0">{product.title}</p>
                    </a>
                    <p className="align-items-center bold d-flex f-20 price mb-0">
                      <span><i className="fa fa-inr" />{product.price}</span>
                      {/*<del><span class="amount"><i class="fa fa-inr"></i>799</span></del>*/}
                    </p>
                    <div className="my-3">
                      <p onClick={()=> dispatch(removeFromWishList(product))} className="link-primary text-clr curser-pointer">
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        )) : renderEmptyWishlist()
      }
    </div>{/*  product grids END here */}
  </div>
</div>






</div>   
      </div>
    </section>
    
  ); 
}
