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
  const baseStep = Math.floor(max / 16.66);
  const [sliderValue, setSliderValue] = useState(
      convertValueToSliderValue(value - min, forwardSliderStep, min, baseStep),
  );

  // make li array
  const countList = [min].concat(
      Array.from({length: space}, (_, i) => i + 1).map(
          (item) => baseStep * item + min,
      ),
  );
  countList.push(max);

  const onSliderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = convertSliderValueToValue(
        Number(e.target.value),
        space,
        baseStep,
        min,
        max,
    );
    const limit = baseStep * (space + 1) + min;
    if (inputValue > limit) {
      setSliderValue(max);
      e.target.step = `1`;
    } else {
      e.target.step = `${forwardSliderStep}`;
      setSliderValue(Number(e.target.value));
      e.target.value = `${Number(e.target.value)}`;
    }
  };

  useEffect(() => {
    const inputValue = convertSliderValueToValue(
        sliderValue,
        space,
        baseStep,
        min,
        max,
    );
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

      <ul className="flex w-full relative  mt-[0.875rem]">
        {countList.map((item, index) => (
          <li
            key={index}
            className={`flex left-0 right-0 leading-[150%]
             pr-[18.75%] justify-center relative
             ${index === 0 && '!justify-start'} 
             ${index === countList.length - 2 && ' pr-[25%]'} 
             ${index === countList.length - 1 && ' pr-[0%] !justify-end'} `}
          >
            <span
              className={`text-base flex  absolute 
             text-white 
             ${
               convertSliderValueToValue(
                   sliderValue,
                   space,
                   baseStep,
                   min,
                   max,
               ) === item ?
                 'text-opacity-100' :
                 'text-opacity-50'
          }
             `}
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
 * every step range percentage  is 18.75% and last step is 25%
 *@param {number} valueRange
 *@return {number}
 */
function getStepValueBySliderPercentage(valueRange: number) {
  const result = valueRange * (18.75 / 100);
  return result;
}
/** slider value to value
 * slider max value take 25% then forward part is 75% and
   division space is every step
 *@param {number} sliderValue
 *@param {number} space
 *@param {number} baseStep
  *@param {number} inputMin
  *@param {number} inputMax
 *@return {number}
 */
function convertSliderValueToValue(
    sliderValue: number,
    space: number,
    baseStep: number,
    inputMin: number,
    inputMax: number,
) {
  const sliderRange = inputMax - inputMin;
  const sliderForwardRange = sliderRange - sliderRange * 0.25;
  const sliderForwardStep = sliderForwardRange / space;
  const howManyStep = Math.round(sliderValue / sliderForwardStep);
  const limit = sliderRange * (3 / 4) + inputMin;
  if (sliderValue > limit) return inputMax;
  else return howManyStep * baseStep + inputMin;
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
