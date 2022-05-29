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
  const moblieLoader = useRef(null);
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
  // mobile loader
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
    };
    const observer = new IntersectionObserver(laodMore, options);
    if (moblieLoader.current) {
      observer.observe(moblieLoader.current);
    }
    return () => {
      if (moblieLoader.current) observer.unobserve(moblieLoader.current);
    };
  }, [moblieLoader, laodMore]);

  const renderDesktop = () => {
    return (
      <div className="hidden lg:flex flex-col">
        <div
          className=" text-3xl text-white
         leading-[150%] tracking-[0.25px] space-y-6 mb-[2.26vh] relative"
        >
          <SvgICon
            onClick={onBack}
            name="arrow"
            className="absolute flex -left-8
            top-0 bottom-0 cursor-pointer
            items-center text-white"
          />
          <span>Results</span>
        </div>
        <div
          className=" grid grid-cols-3 justify-between gap-x-[2vw]
        gap-y-[1.75vw] overflow-auto max-h-[76.22vh]"
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
        <Button onClick={onMoreClick} className="w-[23.82vw] mt-[3.33vh]">
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
            ref={moblieLoader}
          ></Loader>
        </MWrapper>
      </MContainer>
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
export default Search;
