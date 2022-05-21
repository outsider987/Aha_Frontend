import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '~/components/Button';
import SearchItem from '~/components/SearchItem';
import SvgICon from '~/components/SvgIcon';
import {useContextSearch} from '~/store/context/SearchContext';

const Search = () => {
  const {state: searchState, actions: actionsSearch} = useContextSearch();
  const [page, setPage] = useState(searchState.page);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onMoreClick = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    console.log('test');
    actionsSearch.getSearchResult(
        page,
        searchState.pageSize,
        searchState.keyword,
    );
  }, [page]);
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-col">
        <div
          className=" text-3xl text-white
         leading-[150%] tracking-[0.25px] space-y-6 mb-[2.26vh] relative"
        >
          <SvgICon onClick={onBack} name='arrow' className="absolute flex -left-8
            top-0 bottom-0 cursor-pointer
            items-center text-white"/>
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
        </div>
        <Button onClick={onMoreClick} className="w-[23.82vw] mt-[4.33vh]">
          MORE
        </Button>
      </div>
    </>
  );
};
export default Search;
