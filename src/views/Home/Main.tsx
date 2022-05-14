import React, {useState} from 'react';
import Input from '~/components/Input';
import Slider from '~/components/Slider';

const Main = () => {
  const [searchValue, setSearchInput] = useState('');

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
          <span className=" font-bold text-5xl">30</span>
          <span>results</span>
        </div>
        <Slider />
      </div>
    );
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <Row1 />
        <Row2 />
      </div>
    </>
  );
};
export default Main;
