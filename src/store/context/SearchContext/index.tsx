import React, {createContext, useContext, useState} from 'react';
import useUserApi from '~/api/user';

interface Props {
  children: React.ReactNode;
}
export interface SearchItem {
  id: number;
  name: string;
  username: string;
  avater: string;
  isFollowing: false;
}

export interface SearchState {
  searchItem: SearchItem[];
}
interface InterSearchContext {
  state: SearchState;
  actions: {
    getSearchResult: (page: number, pageSize: number, keyword: string) => void;
    setShowNavBar: (b: boolean) => void;
  };
}

const contextDefaultValues: InterSearchContext = {
  state: {
    searchItem: [
      {
        id: 0,
        name: 'name',
        username: 'username',
        avater: 'avater',
        isFollowing: false,
      },
    ],
  },
  actions: {
    getSearchResult: (page: number, pageSize: number, keyword: string) => {},
    setShowNavBar: (t: boolean) => {},
  },
};

export const SearchContext =
  createContext<InterSearchContext>(contextDefaultValues);
export const useContextSearch = () => useContext(SearchContext);
const SearchProvider: React.FC<Props> = ({children}) => {
  const [stateSearch, setState] = useState(contextDefaultValues);
  const {GET_SEARCH} = useUserApi();

  const getSearchResult = async (
      page: number,
      pageSize: number,
      keyword: string,
  ) => {
    const data = (await (
      await GET_SEARCH(page, pageSize, keyword)
    ).data) as SearchItem[];

    await setState({
      ...stateSearch,
      state: {
        ...stateSearch.state,
        searchItem: data,
      },
    });
  };

  const setShowNavBar = (newState: boolean) => {
    setState({
      ...stateSearch,
      state: {
        ...stateSearch.state,
      },
    });
  };

  return (
    <SearchContext.Provider
      value={{...stateSearch, actions: {getSearchResult, setShowNavBar}}}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
