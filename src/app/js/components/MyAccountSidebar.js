import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import * as url from '../utils/Url';

import { userLogout } from "../redux/action/authActions";
import { useDispatch } from "react-redux";


export default function MyAccountSidebar(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut =()=> {
        dispatch(userLogout())
        navigate(url.LOGIN);
        console.log("Logout successfuly");
      }

  return (
    <>
      <div className="col-xs-3 col-md-3 col-lg-3">
   <div className="c-sidebar d-none d-lg-block">
       <ul className="side-nav ul-style-none pl-0">
           <li className="side-active">
               <a href="#" className="f-22">MY ACCOUNT</a>
           </li>
           <li className="side-active">
               <Link to={url.ACCOUNT}>My Profile</Link>
           </li>
           <li>
               <Link to={url.CHANGE_PASSWORD} className="j-account-edit-pass">Change Password</Link>
           </li>
           <li>
               <Link to={url.ADDRESS}>Address Book</Link>
           </li>
           <li>
               <Link to={url.ORDERS}>My Orders</Link>
           </li>
           <li>
               <Link to={url.WISHLIST}>WishList</Link>
           </li>
           <li>
               <Link onClick={logOut}>Sign Out</Link>
           </li>
       </ul>
   </div>
   <select name="" id="myaccountmenu-mobile" className="form-control d-block d-sm-none custom-select">
        <option value={url.ACCOUNT}>MY ACCOUNT</option>
        <option value={url.CHANGE_PASSWORD}>Change Password</option>
        <option value={url.ADDRESS}>Address Book</option>
        <option value={url.ORDERS}>My Orders</option>
        <option value={url.WISHLIST}>Wishlist</option>  
        <option value={url.LOGOUT}>Logout</option>
    </select>
</div>
    </>
  );
}
