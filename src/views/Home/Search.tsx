import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '~/components/Button';
import Loader from '~/components/Loader';
import MBackPage from '~/components/MBackPage';
import MContainer from '~/components/MContainer';
import MWrapper from '~/components/MWrapper';
import SearchItem from '~/components/SearchItem';
import SvgICon from '~/components/SvgIcon';
import {useContextGlobal} from '~/store/context/global';
import {useContextSearch} from '~/store/context/SearchContext';

const Search = () => {
  const {state: searchState, actions: actionsSearch} = useContextSearch();
  const {state: globalState} = useContextGlobal();
  const [page, setPage] = useState({
    page: searchState.page,
    pageSize: searchState.pageSize,
  });

  const loader = useRef(null);
  const laodMore = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        if (globalState.isloading) {
          console.log('I;m break');
          return;
        }

        if (entries[0].isIntersecting) {
          setPage({...page, pageSize: page.pageSize + searchState.pageSize});
        }
      },
      [globalState.isloading],
  );

  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onMoreClick = () => {
    setPage({
      ...page,
      pageSize: searchState.page,
      page: page.page + 1,
    });
  };

  useEffect(() => {
    if (loader.current) {
      console.log(page.page);
      console.log(page.pageSize);
      actionsSearch.getSearchResult(
          page.page,
          page.pageSize,
          searchState.keyword,
      );
    }
  }, [page]);
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  // desktop loader
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
    };
    const observer = new IntersectionObserver(laodMore, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader, laodMore]);

  const renderDesktop = () => {
    return (
      <div className="hidden lg:flex flex-col ">
        <div className=" text-3xl text-white mb-6 relative ">
          <SvgICon
            onClick={onBack}
            name="arrow"
            className="absolute flex -left-[3.1875rem]
            top-0 bottom-0 cursor-pointer
            items-center text-white"
          />
          <span
            className="flex  leading-[2.8125rem] ml-[0.375rem]
          tracking-[0.25px]
           "
          >
            Results
          </span>
        </div>
        <div
          className=" grid grid-cols-3 justify-between gap-x-[2.125rem]
        gap-y-[1.9375rem] overflow-auto max-h-[74.66vh]"
        >
          {searchState.searchItem.map((item) => (
            <SearchItem
              key={item.id}
              name={item.name}
              username={item.username}
              avater={item.avater}
            />
          ))}
          <Loader
            isEnd={
              searchState.total < page.pageSize ||
              searchState.searchItem.length === 0
            }
            isload={globalState.isloading}
            ref={loader}
          ></Loader>
        </div>
        <Button onClick={onMoreClick} className="w-[343px] mt-8">
          MORE
        </Button>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <MContainer>
        <MBackPage>Results</MBackPage>
        <MWrapper contentClassName=" space-y-10">
          {searchState.searchItem.map((item, index) => {
            if (searchState.searchItem.length === index + 1) {
              return (
                <SearchItem
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  avater={item.avater}
                />
              );
            } else {
              return (
                <SearchItem
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  avater={item.avater}
                />
              );
            }
          })}
          <Loader
            isEnd={searchState.total < page.pageSize}
            isload={globalState.isloading}
            ref={loader}
          ></Loader>
        </MWrapper>
      </MContainer>
    );
  };
  return <>{width > 1024 ? renderDesktop() : renderMobile()}</>;
};
export default Search;
