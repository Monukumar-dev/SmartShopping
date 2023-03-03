import React, { useEffect} from "react";
import MyAccountSidebar from "../../components/MyAccountSidebar";
import '../../../style/scss/myAccount.scss';

import { useSelector, useDispatch } from "react-redux";
import { userLogged } from "../../redux/action/authActions";


export default function Address() {
  
  //const { userInfo } = useSelector((state)=> state.auth)
  //console.log(userInfo, 'auth');
  const dispatch = useDispatch();

    const data = dispatch(userLogged());
    //console.log(userLogged, 'dispatch');

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
  <h3>My Address Book</h3>
  <div className="submit-btn j-normal-btn mt-4 mb-3">
    <a href="#" data-toggle="modal" data-target="#editaddress-modal" className="btn btn-primary"> +Add New Address</a>
  </div>
  <div className="address-list-warp">
    <ul className="address-list row ul-style-none pl-14">
      <li className="col-sm-6 pl-0 address-list-wrap address_card" data-re-id={20}>
        <div className="c-address-item c-address-item-hover default-address">
          <p className="name">
            <input type="hidden" name="id" id="id1" defaultValue={387} />
            <strong>Monu Kumar Gautam Kumar </strong> | IN 09768612445</p>
          <p>
            <br />
            <strong>Address:</strong>
            <br />Worli
            Worli
            jaunpur ,  -400603</p>
          <div className="operate">
            <a href="javascript:void(0);" className="primary_address " data-re-id={20}>Make Default</a>
            <a href="javascript:void(0);">Delete</a> 
            <a href="#" data-toggle="modal" data-target="#editaddress-modal" className="editAddressMyAccount">Edit</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>




</div>   
      </div>
    </section>
    
  ); 
}
