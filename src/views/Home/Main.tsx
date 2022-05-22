import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Slider from '~/components/Slider';
import {useContextSearch} from '~/store/context/SearchContext';
import SvgICon from '~/components/SvgIcon';

const Main = () => {
  const {actions: userAction, state: stateSearch} = useContextSearch();
  const [searchValue, setSearchInput] = useState(stateSearch.keyword);
  const [sliderValue, setSliderInput] = useState(stateSearch.pageSize);
  const navigate = useNavigate();

  const onSearchClick = () => {
    userAction.getSearchResult(1, sliderValue, searchValue);
    navigate('/search');
  };

  useEffect(() => {
    userAction.setStateSearch({
      ...stateSearch,
      pageSize: sliderValue,
      keyword: searchValue,
    });
  }, [sliderValue, searchValue]);

  const Row1 = () => {
    const lineDektopClass = 'lg:bg-white lg:bg-opacity-10 lg:my-[3.3vh]';
    const lineMobileClass = 'my-[1.72vh]';
    return (
      <div className="flex flex-col">
        <span
          className="flex text-white text-2xl mb-[1.97vh]
         lg:mb-[2.2vh] leading-[150%]"
        >
          Search
        </span>
        <Input
          type="text"
          value={searchValue}
          setInput={setSearchInput}
          placeholder={'Keyword'}
        />
        <div
          className={`w-full h-[1px] ${lineDektopClass}
         ${lineMobileClass}`}
        />
      </div>
    );
  };
  const Row2 = () => {
    const lineDektopClass = '';
    const lineMobileClass = '';
    return (
      <div className="flex flex-col">
        <span
          className="flex text-white text-2xl lg:mb-[2.2vh]
        mb-[1.97vh] leading-[150%]"
        >
          # Of Results Per Page
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
          min={0}
          max={50}
          step={3}
          className=" mt-6 mb-[2.125rem]"
        />
        <div
          className={`w-full h-[1px] bg-white bg-opacity-10 
          lg:my-[3.3vh] hidden lg:flex`}
        />
      </div>
    );
  };

  const renderDesktop = () => {
    return (
      <div className="hidden lg:flex flex-col w-full h-full justify-between">
        <div className="w-full">
          {Row1()}
          {Row2()}
        </div>

        <Button onClick={onSearchClick} className="w-[23.82vw]">
          SEARCH
        </Button>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div
        className="lg:hidden flex h-screen max-h-screen flex-col
         w-full justify-between"
      >
        <div
          className="flex h-full max-h-screen flex-col
         w-full justify-between px-5"
        >
          <div className="w-full ">
            <div className="py-[3.44vh] flex lg:hidden">
              <img src={require('../../assets/svg/LOGO.svg')} />
            </div>
            {Row1()}
            {Row2()}
          </div>
          <div
            className="mb-[2.95vh] min-h-[17.73vh] w-full flex items-end
          border-t border-solid border-white border-opacity-10"
          >
            <Button onClick={onSearchClick} className="w-full">
              SEARCH
            </Button>
          </div>
        </div>

        <div
          className="min-h-[8.12vh] navbar_mobile justify-center flex
         flex-row items-center space-x-[54.24px]"
        >
          <SvgICon name="template" className="text-white" />
          <SvgICon name="template" className="text-white" />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* desktop */}
      {renderDesktop()}
      {/* mobile */}
      {renderMobile()}
    </>
  );
};
export default Main;
