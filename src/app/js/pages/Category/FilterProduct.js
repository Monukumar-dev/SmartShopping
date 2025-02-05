import React from "react";
import RangeSlider from "./RangeSlider";

export default function FilterProduct(props) {
  const { filters, priceRange, handlePriceChange } = props;  // Destructure filters prop
  
  return (
    <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 leftside-filters">
      {filters.map((filter, i) => (
        <div key={i} className="widget filters-itmes">
          <div className="filter-heading d-flex align-items-center justify-content-between">
            <h4 className="widgettitle">{filter?.title}</h4>
            <p className="widgettitleIcons">
              <i className="fa-search fas float-right"></i>
            </p>
          </div>
          <form>
            <div className="style-2">
              {filter?.options.map((option, i) => (
                <label key={i} className="CusCheckBox control--checkbox text-capitalize">
                  {option}
                  <input
                    type="checkbox"
                    value={option}
                    checked={(filter.selected || []).includes(option)}
                    onChange={filter.handleChange ? () => filter.handleChange(option) : null}
                  />
                  <div className="control__indicator"></div>
                </label>
              ))}
            </div>
          </form>
        </div>
      ))}

      {/* Additional filter section for price */}
      <div className="widget filters-itmes">
        <h4 className="widgettitle">Filter by price</h4>
        <RangeSlider 
          min={1} 
          max={9999} 
          step={100}
          //value={[priceRange.min, priceRange.max]} 
          onChange={handlePriceChange} 
        />


      </div>
    </div>
  );
}
