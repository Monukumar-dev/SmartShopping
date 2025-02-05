import React, { useState, useEffect } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, step, defaultMin, defaultMax, onChange }) => {
  const [priceRange, setPriceRange] = useState({
    minValue: defaultMin || min,
    maxValue: defaultMax || max,
  });

  // Log the updated priceRange after it changes
  useEffect(() => {
    //console.log("Updated price range:", priceRange);
  }, [priceRange]);

  const handleSliderChange = (e) => {
    const { name, value } = e.target;

    // Update the price range value based on the slider change
    setPriceRange((prevState) => {
      const updatedPriceRange = {
        ...prevState,
        [name]: Number(value),
      };

      // Trigger onChange with updated values
      if (onChange) {
        onChange({
          min: name === "minValue" ? updatedPriceRange.minValue : prevState.minValue,
          max: name === "maxValue" ? updatedPriceRange.maxValue : prevState.maxValue,
        });
      }

      return updatedPriceRange; // Set updated state
    });
  };

  const minPercent = ((priceRange.minValue - min) / (max - min)) * 100;
  const maxPercent = ((priceRange.maxValue - min) / (max - min)) * 100;

  return (
    <>
      <div className="slider">
        <div
          className="slider-track"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={priceRange.minValue}
          onChange={handleSliderChange}
          name="minValue"
          className="slider-thumb"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={priceRange.maxValue}
          onChange={handleSliderChange}
          name="maxValue"
          className="slider-thumb"
        />
      </div>
      <div className="range-values">
        <span>₹{priceRange.minValue.toLocaleString()}</span>
        <span>₹{priceRange.maxValue.toLocaleString()}</span>
      </div>
    </>
  );
};

RangeSlider.defaultProps = {
  min: 0,
  max: 10000,
  step: 100,
  defaultMin: null,
  defaultMax: null,
  onChange: null,
};

export default RangeSlider;
