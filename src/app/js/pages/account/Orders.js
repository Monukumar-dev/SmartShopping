import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';

export default function Orders() {
  

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
  <div className="col-xs-9 col-md-9 col-lg-9">
  <h3>My ORDER</h3>
  <div className="c-account-setting myorder">
    
    {/*start product box*/}
    <div className="card padding-2 padding-l-r-2 mb-4">
      <div className="card-header row m-0 pl-0 pr-0">
        <div className="col-md-6 col-xs-6">
          <p className="orderId m-0"><strong>Order ID : </strong>0000886</p>
          <p className="orderId m-0"><strong>Placed on : </strong>2023-02-13 15:57:52</p>
        </div>
        <div className="col-md-6 col-xs-6 text-md-end">
          <p className="f-16 mb-0">
            <span className="orderInfo bold">Order Total : </span>
            <span className="f-16 bold primary-clr"><i className="fa fa-rupee" /> 100</span>              
          </p>
          <p className="orderId m-0"><span className="label label-warning">Unpaid</span></p>
        </div>
      </div>
      <div className="card-body p-2">
        <div className="row">
          <div className="col-3 col-md-2 col-xs-2">
            <a href="/jaidurga/product/demo-blue-s" target="_blank" alt="" title>
              <img src="https://storage.googleapis.com/qfix-shopping/shop/static/pub/media/catalog/product/new_product/original_57653.jpg?GoogleAccessId=gcs-service-account%40burnished-stone-180612.iam.gserviceaccount.com&Expires=1677839065&Signature=RxiBaOYbJ5KOe%2FTxwNRGNiCgCEYMQLBVDb6lFCZGHmgfOdJMn6hDhmLF9RsvTcpdPnV1eL9PT6Ej%2BWQv%2B4ghCQk%2BzT5fw5O9UhkoHgQvzclJ%2BVDnbPXHmFCkrmCD8xWQiKTo3ITkAN3WC%2BWw%2FfGXG2ai0vl0d5%2Busro6BV8%2FFHuy566XXFANWv3a066pcSsk5PvK92g0k396M0Xa3V3olKBYzk0FsEOfryxZQ3j2pvdx2C%2BMh4JBnJBnRdPwoR2B3EUuGHDjQI4Pexk8j5A6ZG1e22NLuZ53QvXiRZMvZ6ja35DF77v3u%2BdWUCNM2YBhweVb5dGHbIf9kkCc2d16cw%3D%3D" className="img-fluid productImage" />
            </a>
          </div>
          <div className="col-9 col-md-10 col-xs-10 pl-0 pl-md-3">
            <h4 className="productTitle m-0">
              <a className="primary-clr" href="/jaidurga/product/demo-blue-s" alt="" title />
            </h4>
            <div className="mb-2"><strong>demo--Blue-S</strong> </div>
            <div className="text-left orders_btn_position_ f-14">                                    
              <a href="#" className="btn btn-outline-primary mb-2 py-0 me-1">Track</a>
              <a href="#" className="btn btn-outline-primary mb-2 py-0"> Order Details </a>                                            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





</div>   
      </div>
    </section>
    
  ); 
}
