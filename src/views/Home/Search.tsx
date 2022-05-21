import React from 'react';
import SearchItem from '~/components/SearchItem';
import {useContextSearch} from '~/store/context/SearchContext';

const Search = () => {
  const {state: searchState} = useContextSearch();
  console.log(searchState);
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-flow relative">
        <div className="absolute"></div>
        <div className=" text-3xl leading-[150%] tracking-[0.25px] space-y-6">
          Results
        </div>
        <div className=" space-x-[8.125rem]">
          {searchState.searchItem.map((item) => (
            <SearchItem
              key={item.id}
              name={item.name}
              username={item.username}
              avater={item.avater}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Search;
