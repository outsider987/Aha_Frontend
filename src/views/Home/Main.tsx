import React, {useEffect, useState} from 'react';
import Input from '~/components/Input';
import Slider from '~/components/Slider';

const Main = () => {
  const [searchValue, setSearchInput] = useState('');
  const [sliderValue, setSliderInput] = useState(15);
  useEffect(() => {
    console.log(sliderValue);
  }, [sliderValue]);

  const Row1 = () => {
    return (
      <div className="flex flex-col">
        <span className=" flex text-white text-2xl mb-[2.2vh] leading-[150%]">
          Search
        </span>
        <Input
          type="text"
          value={searchValue}
          setInput={setSearchInput}
          placeholder={'Keyword'}
        />
        <div className="w-full h-[1px] bg-white bg-opacity-10 my-[3.3vh]" />
      </div>
    );
  };
  const Row2 = () => {
    return (
      <div className="flex flex-col">
        <span className="flex text-white text-2xl mb-[2.2vh] leading-[150%]">
          # of results per page
        </span>
        <div
          className="flex flex-row tracking-[0.15px]
        text-white space-x-[0.625rem] items-baseline"
        >
          <span className=" font-bold text-5xl">{sliderValue}</span>
          <span>results</span>
        </div>
        <Slider
          value={sliderValue}
          setInput={setSliderInput}
          min={3}
          max={50}
          step={3}
          className=" mt-6 mb-[2.125rem]"
        />
        <div className="w-full h-[1px] bg-white bg-opacity-10 my-[3.3vh]" />
      </div>
    );
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        {Row1()}
        {Row2()}
      </div>
    </>
  );
};
export default Main;
