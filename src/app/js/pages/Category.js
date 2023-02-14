import React, { useEffect, useState } from "react";
import axios from "axios";

import '../../style/scss/category.scss';
import Product from "../components/Product";



export default function Category() {

  const [productList, setProductList] = useState([]);

  const productApiUrl = "https://63cec9f4fdfe2764c72a860a.mockapi.io/api/products"

  useEffect(()=> {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result  = await axios.get(productApiUrl);
    console.log('Product Home', result.data);
    setProductList(result.data);
}


  function renderLeftSidebar() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 leftside-filters">
        
        <div className="widget filters-itmes">
          <div className="filter-heading d-flex align-items-center justify-content-between">
            <h4 className="widgettitle">CATEGORIES</h4>
            <p className="widgettitleIcons"><i className="fa-search fas float-right"></i></p>
          </div>
          <form className="">
            <div className="style-2">
                <label className="CusCheckBox control--checkbox">
                  Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Lounge Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Shoes
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Clothing
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
          </div>
          </form>
       </div>

       <div className="widget filters-itmes">
          <div className="filter-heading d-flex align-items-center justify-content-between">
            <h4 className="widgettitle">BRAND</h4>
            <p className="widgettitleIcons"><i className="fa-search fas float-right"></i></p>
          </div>
          <form className="">
            <div className="style-2">
                <label className="CusCheckBox control--checkbox">
                  Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Lounge Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Shoes
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Clothing
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
          </div>
          </form>
       </div>
       
       <div className="widget filters-itmes">
          <div className="filter-heading d-flex align-items-center justify-content-between">
            <h4 className="widgettitle">Filter by price</h4>
            <p className="widgettitleIcons"><i className="fa-search fas float-right"></i></p>
          </div>
          <form className="">
            <div className="style-2">
                <label className="CusCheckBox control--checkbox">
                  Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Lounge Tshirts
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Shoes
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  Clothing
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
          </div>
          </form>
       </div>

       <div className="widget filters-itmes">
          <div className="filter-heading d-flex align-items-center justify-content-between">
            <h4 className="widgettitle">Filter by size</h4>
            <p className="widgettitleIcons"><i className="fa-search fas float-right"></i></p>
          </div>
          <form className="">
            <div className="style-2">
                <label className="CusCheckBox control--checkbox">
                  S
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  M
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  L
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                <label className="CusCheckBox control--checkbox">
                  XL
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
          </div>
          </form>
       </div>

					{/* <div className="widget widget_filter_price box-has-content">
						<h3 className="widgettitle">Filter by price</h3>
						<div className="price-filter">
		                    <div data-label-reasult="price:" data-min="75" data-max="450" data-unit="$" className="slider-range-price " data-value-min="75" data-value-max="250"></div>
		                    <div className="amount-range-price">Price: <span className="from">$75</span> - <span className="to">$250</span></div>
		                    <a href="#" className="filter">Filter</a>
		                </div>
					</div> */}
					{/* <div className="widget widget_filter_color">
						<h3 className="widgettitle">Filter by colors</h3>
						<ul className="list-color">
							<li><a href="#" className="red"></a></li>
							<li><a href="#" className="gray"></a></li>
							<li className="current"><a href="#" className="blue-0"></a></li>
							<li><a href="#" className="orange"></a></li>
							<li><a href="#" className="blue-1"></a></li>
							<li><a href="#" className="black"></a></li>
							<li><a href="#" className="green"></a></li>
						</ul>
					</div> */}
				</div>
    );
  }

  function renderRightContent() {
    return (
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 right-content">
      <div className="auto-clear">
        <div className="top-control box-has-content">
          <div className="breadcrumbs">
            <a href="#">Home</a> / <span className="current">Shop</span>
          </div>
          <div className="control">
            <span className="title">Showing 1–9 of 100 results</span>
            <div className="filters-content">
              <a href="#" className="filter-more">Filters +</a>
              <div className="filter-inner">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <h4 className="title">Filter by Brands</h4>
                    <ul className="list-filter">
                      <li><a href="#">Sofas <span className="count"> (26)</span></a></li>
                      <li><a href="#">Lights & Lamps <span className="count"> (12)</span></a></li>
                      <li><a href="#">Decorations <span className="count"> (8)</span></a></li>
                      <li><a href="#">Chairs <span className="count"> (36)</span></a></li>
                      <li><a href="#">Tables <span className="count"> (23)</span></a></li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <h4 className="title">Filter by Price</h4>
                    <ul className="list-filter">
                      <li><a href="#">Less than $50  <span className="count"> (26)</span></a></li>
                      <li><a href="#">$50 - 100  <span className="count"> (12)</span></a></li>
                      <li><a href="#">$100 - 200  <span className="count"> (8)</span></a></li>
                      <li><a href="#">$200 - 400 <span className="count"> (36)</span></a></li>
                      <li><a href="#">$400 - 600 <span className="count"> (23)</span></a></li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="widget widget_filter_color">
                      <h3 className="title">Filter by colors</h3>
                      <ul className="list-color">
                        <li><a href="#" className="red"></a></li>
                        <li><a href="#" className="gray"></a></li>
                        <li className="current"><a href="#" className="blue-0"></a></li>
                        <li><a href="#" className="orange"></a></li>
                        <li><a href="#" className="blue-1"></a></li>
                        <li><a href="#" className="black"></a></li>
                        <li><a href="#" className="green"></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <h3 className="title">POPULAR TAGS</h3>
                    <ul className="list-tags">
                      <li><a href="#">Chairs</a></li>
                      <li><a href="#">Bedroom</a></li>
                      <li><a href="#">Clock</a></li>
                      <li><a href="#">Tea table</a></li>
                      <li><a href="#">TV Cabinets</a></li>
                      <li><a href="#">New Comming</a></li>
                      <li><a href="#">Curtains</a></li>
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Sofas</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="row product-grid">
          {
           productList.length>0 ? productList.map((item) => (
              <div className="col-ss-12 col-xs-6 col-sm-6 col-md-6 col-lg-4" key={item.id}>
                <Product data={item} />
              </div>

            )) : <h3 className="text-center p-4">Not found any Product</h3>
          }
          

        </div>


        <div className="pagination justify-content-center">
          <ul className="list-page">
            <li><a href="#" className="page-number prev">Previous</a></li>
            <li><a href="#" className="page-number">1</a></li>
            <li><a href="#" className="page-number">2</a></li>
            <li><a href="#" className="page-number current">3</a></li>
            <li><a href="#" className="page-number">4</a></li>
            <li><a href="#" className="page-number">5</a></li>
            <li><a href="#" className="page-number">6</a></li>
            <li><a href="#" className="page-number next">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
    );
  }


 
  return (
    <div className="main-content grid-category-page inner-page">
		<div className="container">
			<div className="row">
        {renderLeftSidebar()}
				{renderRightContent()}
        
        
			</div>
		</div>

		{/* <div className="newsletter layout1 box-has-content">
			<div className="newsletter-inner">
				<h3 className="title"> SIGN UP NOW <span>Yahoo!!</span></h3>
				<p className="des">Get 25% off on your first purchase and get more news & promotions from us.</p>
				<div className="newsletter-block">
					<input type="text" className="input-info" /><a href="#" className="submit button">Subscribe!</a>
				</div>
			</div>
		</div> */}
	</div>
  ); 
}
