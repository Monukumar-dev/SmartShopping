import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Logo from '../../style/images/logo.svg';

export default function Footer(props) {

  
  function renderPage() {
    return (
      <div id="footer" className="section py-5">
      <div className="container px-md-0">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="footer_logo m_mb_24">
              <img src={Logo} className="img-fluid" />
              <p className="mb-0">All rights reserved. copyright © {new Date().getFullYear()}</p>
            </div>
            <div className="align-items-baseline d-flex mt-2">
              <p className="mb-0 me-2">Follow us on </p>
              <ul className="list-inline FollowUs mb-0 ml-2 d-flex">
                <li className="list-inline-item">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fab fa-twitter" /></a>
                </li>
              </ul>		
            </div>
          </div>
          <div className="col-12 col-md-4 pt-3 pt-md-0 text-center">
            <div className="row">
              <div className="col widget">
                <h3 className="widgettitle">OUR STORE</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Return Policy</a></li>
                  <li><a href="#">Shipping Policy</a></li>
                </ul>
              </div>
              <div className="col widget">
                <h3 className="widgettitle">EXPLORE</h3>
                <ul>
									<li><a href="#">Men</a></li>
									<li><a href="#">Women</a></li>
									<li><a href="#">Backpacks</a></li>
									<li><a href="#">Boots</a></li>
									<li><a href="#">Accessories</a></li>
									<li><a href="#">Gifts</a></li>
								</ul>
              </div>
            </div>
          </div>
          <div className="align-items-end col-12 col-md-4 d-flex flex-column pt-3 pt-md-0">
            <div className="widget widget_tags">
								<h3 className="widgettitle">POPULAR TAGS</h3>
								<ul className="list-tags">
									<li><a href="#">Clothing</a></li>
									<li><a href="#">Fashion</a></li>
									<li><a href="#">T-Shirt</a></li>
									<li><a href="#">Denims</a></li>
									<li><a href="#">Beautiful</a></li>
									<li><a href="#">Shoes &amp; Boots</a></li>
									<li><a href="#">Blue</a></li>
									<li><a href="#">Sweaters</a></li>
									<li><a href="#">Hats</a></li>
									<li><a href="#">Clearances</a></li>
								</ul>
							</div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <>
       {renderPage()}     
    </>
  );
}
