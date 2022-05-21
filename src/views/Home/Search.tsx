import React from 'react';
import Button from '~/components/Button';
import SearchItem from '~/components/SearchItem';
import {useContextSearch} from '~/store/context/SearchContext';

const Search = () => {
  const {state: searchState,actions:actionsSearch} = useContextSearch();
  const onMoreClick = () => {
    
  };
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-col relative ">
        <div className="absolute"></div>
        <div
          className=" text-3xl text-white
         leading-[150%] tracking-[0.25px] space-y-6 mb-[2.66vh]"
        >
          Results
        </div>
        <div className=" grid grid-cols-3 justify-between gap-x-[2vw] gap-y-[1.75vw] overflow-auto max-h-[76.22vh]">
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
