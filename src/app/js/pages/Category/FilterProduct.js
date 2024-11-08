import React from "react";
import RangeSlider from "./RangeSlider";

export default function FilterProduct(props) {
    const  selectedCategories = props.selectedCategories
    const handleCategoryChange = props.handleCategoryChange
    const priceRange = props.priceRange
    const handlePriceChange = props.handlePriceChange
    const minRating = props.minRating
    const setMinRating = props.setMinRating
  return (
    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 leftside-filters">
      <div className="widget filters-itmes">
        <div className="filter-heading d-flex align-items-center justify-content-between">
          <h4 className="widgettitle">CATEGORIES</h4>
          <p className="widgettitleIcons">
            <i className="fa-search fas float-right"></i>
          </p>
        </div>
        <form>
          <div className="style-2">
            <label className="CusCheckBox control--checkbox">
              Men's Clothing
              <input
                type="checkbox"
                value="men's clothing"
                checked={selectedCategories.includes("men's clothing")}
                onChange={() => handleCategoryChange("men's clothing")}
              />
              <div className="control__indicator"></div>
            </label>
            <label className="CusCheckBox control--checkbox">
              Women's Clothing
              <input
                type="checkbox"
                value="women's clothing"
                checked={selectedCategories.includes("women's clothing")}
                onChange={() => handleCategoryChange("women's clothing")}
              />
              <div className="control__indicator"></div>
            </label>
            <label className="CusCheckBox control--checkbox">
              Jewelery
              <input
                type="checkbox"
                value="jewelery"
                checked={selectedCategories.includes("jewelery")}
                onChange={() => handleCategoryChange("jewelery")}
              />
              <div className="control__indicator"></div>
            </label>
            <label className="CusCheckBox control--checkbox">
              Electronics
              <input
                type="checkbox"
                value="electronics"
                checked={selectedCategories.includes("electronics")}
                onChange={() => handleCategoryChange("electronics")}
              />
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

      {/* Additional filter sections (Brand, Price, Size, etc.) */}
      <div className="widget filters-itmes">
        <h4 className="widgettitle">Filter by price</h4>

            <RangeSlider 
            min={1} 
            max={10000} 
            step={100} 
            defaultMin={2900} 
            defaultMax={6100} 
            onChange={handlePriceChange} 
        />
      </div>
      {/* <div className="widget filters-itmes">
        <h4 className="widgettitle">Rating</h4>
        <label>
          Min Rating:
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          />
        </label>
      </div> */}

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
    </div>  */}

    </div>
  );
}
