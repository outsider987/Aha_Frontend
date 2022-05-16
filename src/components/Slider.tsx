import React, {useEffect, useState} from 'react';
interface Props {
  className?: string;
  max: number;
  min: number;
  step: number;
  setInput: (value: any) => void;
  value: number;
}

const Slider: React.FC<Props> = ({
  className,
  max,
  min,
  step,
  setInput,
  value,
}) => {
  const forwardStep = getStepValueBySliderPercentage(min, max);
  const [stepValue, setStep] = useState(forwardStep);
  const [sliderValue, setSliderValue] = useState(value * 3);
  const baseStepRange = Math.floor(max / 16.66);
  // make li array
  const countList = [min].concat(
      Array.from({length: 4}, (_, i) => i + 1).map(
          (item) => baseStepRange * item + min,
      ),
  );
  countList.push(max);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSliderValue(Number(e.target.value));
  };

  useEffect(() => {
    setInput(convertSliderValueToValue(sliderValue, min));
    getBackgroundSize();
  }, [sliderValue]);
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${Math.ceil(
          convertValueToBackGroundSize(sliderValue, min, max),
      )}% `,
    };
  };

  return (
    <div className={`slide_group  ${className}`}>
      <input
        value={sliderValue}
        className="slider z-[99] "
        type="range"
        min={min}
        max={max}
        step={stepValue}
        style={getBackgroundSize()}
        onChange={onInputChange}
      />

      <ul className="flex w-full relative  mt-4">
        {countList.map((item, index) => (
          <li
            key={index}
            className={`flex  left-0 right-0  h-auto justify-start  w-1 pr-[18.31%] ${
              index === countList.length - 2 && ' pr-[24.97%]'
            } `}
          >
            <span
              className=" text-base flex   absolute
             text-white text-opacity-50"
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * slider value have to convert to real input value
 *@param {number} value inputValue
 *@param {number} inputMin
 *@param {number} inputMax
 *@return {number}The sum of the two numbers.
 */
function convertValueToBackGroundSize(
    value: number,
    inputMin: number,
    inputMax: number,
) {
  const range = inputMax - inputMin;
  const child = value - inputMin;
  const result = (100 * child) / range;
  return result;
}

/**
 * slider value have to convert to real input value
 * every step range percentage  is 18.75% and last step is 24.97%
 * and every li is 18.31%
 *@param {number} inputMin
 *@param {number} inputMax
 *@return {number}The sum of the two numbers.
 */
function getStepValueBySliderPercentage(inputMin: number, inputMax: number) {
  const range = inputMax - inputMin;
  const result = range * (18.75 / 100);

  return result - 0.05;
}
/**
 * convert value back
 *@param {number} sliderValue
 *@param {number} inputMin
 *@return {number}The sum of the two numbers.
 */
function convertSliderValueToValue(sliderValue: number, inputMin: number) {
  const result = Math.round(sliderValue - inputMin) / 3;
  return Math.round(result + inputMin);
}

export default Slider;
