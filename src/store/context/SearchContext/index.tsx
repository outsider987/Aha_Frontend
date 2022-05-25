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
  page: number;
  pageSize: number;
  total: number;
  keyword: string;
}
interface InterSearchContext {
  state: SearchState;
  actions: {
    getSearchResult: (
      page: number,
      pageSize: number,
      keyword: string
    ) => Promise<SearchItem[]>;
    setStateSearch: (p: SearchState) => void;
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
    page: 1,
    pageSize: 9,
    total: 0,
    keyword: '',
  },
  actions: {
    getSearchResult: async (
        page: number,
        pageSize: number,
        keyword: string,
    ) => [],
    setStateSearch: (p: SearchState) => {},
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
    const resp = await await GET_SEARCH(page, pageSize, keyword);
    const data = (await resp.data) as SearchItem[];
    await setState({
      ...stateSearch,
      state: {
        ...stateSearch.state,
        searchItem: data,
        total: resp.total,
      },
    });
    return await data;
  };

  const setStateSearch = (currentState: SearchState) => {
    setState({
      ...stateSearch,
      state: currentState,
    });
  };

  return (
    <SearchContext.Provider
      value={{...stateSearch, actions: {getSearchResult, setStateSearch}}}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
