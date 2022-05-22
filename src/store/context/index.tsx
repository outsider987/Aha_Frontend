import React from 'react';
import StoreGlobalProvider from '~/store/context/global';
import SearchProvider from '~/store/context/SearchContext';
import TagsProvider from '~/store/context/TagContext';

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({children}) => {
  return (
    <>
      <StoreGlobalProvider>
        <SearchProvider>
          <TagsProvider>{children}</TagsProvider>
        </SearchProvider>
      </StoreGlobalProvider>
    </>
  );
};
export default ContextProvider;
