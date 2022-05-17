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
  const space = 4;
  const valueRange = max - min;
  const forwardSliderStep = getStepValueBySliderPercentage(valueRange);
  const baseStepRange = Math.floor(max / 16.66);
  const [sliderValue, setSliderValue] = useState(
      convertValueToSliderValue(
          value - min,
          forwardSliderStep,
          min,
          baseStepRange,
      ),
  );

  // make li array
  const countList = [min].concat(
      Array.from({length: 4}, (_, i) => i + 1).map(
          (item) => baseStepRange * item + min,
      ),
  );
  countList.push(max);

  const onSliderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = convertSliderValueToValue(Number(e.target.value), min);

    if (inputValue > baseStepRange * (space + 1)) {
      setSliderValue(max);
      e.target.step = `1`;
    } else {
      e.target.step = `${forwardSliderStep}`;
      setSliderValue(Number(e.target.value));
      e.target.value = `${Number(e.target.value)}`;
    }
  };

  useEffect(() => {
    const inputValue = convertSliderValueToValue(sliderValue, min);
    sliderValue === max ? setInput(max) : setInput(inputValue);
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
        id="input"
        value={sliderValue}
        className="slider z-[99] "
        type="range"
        min={min}
        max={max}
        step={forwardSliderStep}
        style={getBackgroundSize()}
        onInput={onSliderInputChange}
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
 *@param {number} valueRange
 *@return {number}
 */
function getStepValueBySliderPercentage(valueRange: number) {
  const result = valueRange * (18.75 / 100);
  return result - 0.05;
}
/** slider value to value
 * convert value back
 *@param {number} sliderValue
 *@param {number} inputMin
 *@return {number}
 */
function convertSliderValueToValue(sliderValue: number, inputMin: number) {
  const result = Math.round(sliderValue - inputMin) / 3;
  return Math.round(result + inputMin);
}

/** value to slider value
 * convert value back
 *@param {number} value
 *@param {number} forwardSliderStep
 *@param {number} inputMin
 *@param {number} baseStepRange
 *@return {number}
 */
function convertValueToSliderValue(
    value: number,
    forwardSliderStep: number,
    inputMin: number,
    baseStepRange: number,
) {
  const sliderValue = value / baseStepRange;
  const result = Math.floor(sliderValue * forwardSliderStep);

  return result + inputMin;
}

export default Slider;
