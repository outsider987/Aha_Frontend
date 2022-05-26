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
    const lineDektopClass = 'lg:bg-white lg:bg-opacity-10 lg:my-[3.33vh]';
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
        inputClassName='max-h-[6.66vh]'
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
          className="flex text-white text-2xl lg:mb-[2.22vh]
        mb-[1.97vh] leading-[150%]"
        >
          # Of Results Per Page
        </span>
        <div
          className="flex flex-row tracking-[0.15px]
        text-white space-x-[0.625rem] items-baseline"
        >
          <span className=" font-bold text-5xl leading-[150%]">{sliderValue}</span>
          <span className='ml-[0.625rem] tracking-[0.15px] leading-[150%]'>results</span>
        </div>
        <Slider
          value={sliderValue}
          setInput={setSliderInput}
          min={3}
          max={50}
          step={3}
          className=" mt-6 mb-[1.875rem]"
        />
        <div
          className={`w-full h-[1px] bg-white bg-opacity-10 
          lg:my-[3.33vh] hidden lg:flex`}
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
      {/* desktop */}
      {renderDesktop()}
      {/* mobile */}
      {renderMobile()}
    </>
  );
};
export default Main;
