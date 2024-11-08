import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ min, max, step, defaultMin, defaultMax, onChange }) => {
  const [priceRange, setPriceRange] = useState({
    minValue: defaultMin || min,
    maxValue: defaultMax || max,
  });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));

    if (onChange) {
      onChange({
        min: name === "minValue" ? Number(value) : priceRange.minValue,
        max: name === "maxValue" ? Number(value) : priceRange.maxValue,
      });
    }
  };

  const minPercent = ((priceRange.minValue - min) / (max - min)) * 100;
  const maxPercent = ((priceRange.maxValue - min) / (max - min)) * 100;

  return (
    <div className="container">
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
          onChange={handlePriceChange}
          name="minValue" // Set name attribute for the minimum slider
          className="slider-thumb"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={priceRange.maxValue}
          onChange={handlePriceChange}
          name="maxValue" // Set name attribute for the maximum slider
          className="slider-thumb"
        />
      </div>
      <div className="range-values">
        <span>₹{priceRange.minValue.toLocaleString()}</span>
        <span>₹{priceRange.maxValue.toLocaleString()}</span>
      </div>
    </div>
  );
};

RangeSlider.defaultProps = {
  min: 0,
  max: 10000,
  step: 100,
  defaultMin: 2000,
  defaultMax: 8000,
  onChange: null,
};

export default RangeSlider;
