import React from 'react';

const Slider = () => {
  return (
    <div className="slide_group">
      <input
        className="slider"
        type="range"
        id="volume"
        name="volume"
        min="3"
        max="50"
      />
      <ul className="">
        <li className="">
          <span className="absolute">1H</span>
        </li>
        <li className="flex justify-center relative">
          <span className="absolute">1D</span>
        </li>
        <li className="flex justify-center relative">
          <span className="absolute">1W</span>
        </li>
        <li className="flex justify-center relative">
          <span className="absolute">1M</span>
        </li>
        <li className="flex justify-center relative">
          <span className="absolute">1Y</span>
        </li>
        <li className="flex justify-center relative">
          <span className="absolute">ALL</span>
        </li>
      </ul>
    </div>
  );
};
export default Slider;
