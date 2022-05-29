import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Slider from '~/components/Slider';
import {useContextSearch} from '~/store/context/SearchContext';
import {routes} from '~/router';
import NavBarItem from './NavBar/NavBarItem';
import {useLocation} from 'react-router-dom';
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
    const lineDektopClass = 'lg:bg-white lg:bg-opacity-10 lg:my-[1.875rem]';
    const lineMobileClass = 'my-[1.72vh]';
    return (
      <div className="flex flex-col">
        <span
          className="flex text-white text-2xl mb-[1.97vh]
         lg:mb-5 leading-[150%]"
        >
          Search
        </span>
        <Input
          inputClassName="max-h-[6.66vh] min-h-[3.75rem]"
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
          className="flex text-white text-2xl lg:mb-5
        mb-4 leading-[150%]"
        >
          # Of Results Per Page
        </span>
        <div
          className=" flex flex-row items-end text-white space-x-[0.625rem]
        min-h-[3.125rem]"
        >
          <span className=" font-bold text-5xl ">{sliderValue}</span>
          <span
            className="flex leading-[150%] pb-1 text-base
           tracking-[0.15px]"
          >
            results
          </span>
        </div>
        <Slider
          value={sliderValue}
          setInput={setSliderInput}
          min={3}
          max={50}
          step={3}
          className=" mt-[1.625rem] mb-[2.25rem] h-2"
        />
        <div
          className={`w-full h-[1px] bg-white bg-opacity-10 
          lg:my-[1.875rem] hidden lg:flex`}
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

        <Button
          onClick={onSearchClick}
          className="w-[23.82vw] min-h-[2.5rem] max-h-10
         text-sm py-[0.8125rem] px-4 leading-[100%] text-center"
        >
          SEARCH
        </Button>
      </div>
    );
  };

  const renderMobile = () => {
    const mainRoutes = routes[0];
    return (
      <div
        className="lg:hidden flex h-screen max-h-screen flex-col
         w-full justify-between"
      >
        <div
          className="flex h-full max-h-screen flex-col
         w-full justify-between px-5"
        >
          <div className="w-full flex flex-col">
            <div className="pt-7 pb-[1.6875rem] flex lg:hidden min-h-[70px]">
              <img src={require('../../assets/svg/LOGO.svg')} />
            </div>
            {Row1()}
            {Row2()}
          </div>
          <div
            className="mb-[2.95vh] min-h-[25.86vh] w-full flex items-end
          border-t border-solid border-white border-opacity-10"
          >
            <Button
              onClick={onSearchClick}
              className="w-full max-h-10 text-sm
            leading-[100%]"
            >
              SEARCH
            </Button>
          </div>
        </div>

        <div
          className="min-h-[8.12vh] navbar_mobile justify-center flex
         flex-row items-center space-x-[54.24px]"
        >
          {mainRoutes.children.map((item) => (
            <NavBarItem
              key={item.path}
              isShow={item.isShow}
              iconName={item.icon}
              path={item.path}
              text={item.text}
              isFocus={useLocation().pathname === `${item.path}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
};
export default Main;
