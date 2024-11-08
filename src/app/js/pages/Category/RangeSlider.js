import React, { useState, useEffect } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, step, defaultMin, defaultMax, onChange }) => {
  const [priceRange, setPriceRange] = useState({
    minValue: defaultMin || min,
    maxValue: defaultMax || max,
  });

  // Handle slider changes and update local state
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const updatedPriceRange = {
      ...priceRange,
      [name]: Number(value),
    };

    // Update local state
    setPriceRange(updatedPriceRange);

    // Trigger onChange with keys 'min' and 'max' for compatibility with parent handler
    if (onChange) {
      onChange({
        min: name === "minValue" ? Number(value) : priceRange.minValue,
        max: name === "maxValue" ? Number(value) : priceRange.maxValue,
      });
    }
  };

  // Percentage calculations for slider UI
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

// Default props
RangeSlider.defaultProps = {
  min: 0,
  max: 10000,
  step: 100,
  defaultMin: null,
  defaultMax: null,
  onChange: null,
};

export default RangeSlider;
