import React, {useState} from 'react';
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
  const baseStepRange = Math.floor(max / 16.66);
  // make li array
  const countList = [min].concat(
      Array.from({length: 4}, (_, i) => i + 1).map(
          (item) => baseStepRange * item + min,
      ),
  );
  countList.push(max);

  const forwardStep = getStepValueBySliderPercentage(
      min,
      max,
  );

  const [stepValue, setStep] = useState(forwardStep);
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${Math.ceil(
          convertValueToBackGroundSize(value, min, max),
      )}% `,
    };
  };
  console.log(convertSliderStepValueToStepValue(forwardStep));
  return (
    <div className={`slide_group  ${className}`}>
      <input
        value={value}
        className="slider z-[99] "
        type="range"
        min={min}
        max={max}
        step={stepValue}
        style={getBackgroundSize()}
        onChange={(e) => {
          console.log(e.target.value);
          setInput(Number(e.target.value));
        }}
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
function getStepValueBySliderPercentage(
    inputMin: number,
    inputMax: number,
) {
  const range = inputMax - inputMin;
  const result = range * (18.75 / 100);

  return result - 0.05;
}
/**
 * convert value back
 *@param {number} stepValue inputValue
 *@param {number} inputMin
 *@param {number} inputMax
 *@return {number}The sum of the two numbers.
 */
function convertSliderStepValueToStepValue(stepValue: number) {
  const result = (stepValue * 18.32) / 100;

  return Math.round(result);
}

export default Slider;
