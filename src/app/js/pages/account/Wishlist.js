import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';

export default function Wishlist() {
  

  const updateProfile = (id) => {
    //dispatch(userLogin(data))
    //console.log(id);

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
      <div className="col-6 col-md-3 mb-3">
        <div className="card">
          {/*<span class="onsale">26% OFF</span>*/}
          <a href="/jaidurga/product/mens-winter-tshirt-white-5" className="text-clr">
            <img className="card-img-top" src="https://storage.googleapis.com/qfix-shopping/shop/static/pub/media/catalog/product/new_product/original_56563.jpg?GoogleAccessId=gcs-service-account%40burnished-stone-180612.iam.gserviceaccount.com&Expires=1677839678&Signature=pEmgxo6JN9TmW870a%2B6cCVfBEvI0MKsYrEUwm7EaaAQU5dN0%2FCRsW4iEJNG3FxxMVleal%2FOVC6ABwYs2VSM1sHh3R17r7U9HavYRV%2BpjCTEOl5w%2FE1t6NngiRBdRlTcvEZKW%2Fpep8QbdCktq2RwmiEBki%2F1r5p8B5KvBwwnzwW8N%2FQgtlQVdq3zXnxl3Y9MbbFkuk5Tk88qOxUPmIAKnIY0GOuG%2BgUj3pL37ZtmFQ0hAKscDUX15uNdk%2B2iIl4ukHvz9UB5%2FVTInEPqfbLpbs%2F%2F2HWT5rg9BwXhhPfEVl9OBy4BVCuDax9yuOGxVWcuico%2Fvbrgv1JUOdU1NPNyP4A%3D%3D" alt="" />
          </a>
          <div className="card-body">
            <a href="/jaidurga/product/mens-winter-tshirt-white-5" className="text-clr">
              <p className="card-text mb-0">Mens Winter Tshirt White</p>
            </a>
            <p className="align-items-center bold d-flex f-20 price mb-0">
              <span><i className="fa fa-inr" />599</span>
              {/*<del><span class="amount"><i class="fa fa-inr"></i>799</span></del>*/}
            </p>
            <div className="inlinebutton-base-action itemContainer-base-itemActions my-3">
              <a href="#" className="text-clr wishlistButton" >Remove from WishList</a>
            </div>
          </div>
        </div>
      </div>
    </div>{/*  product grids END here */}
  </div>
</div>






</div>   
      </div>
    </section>
    
  ); 
}
