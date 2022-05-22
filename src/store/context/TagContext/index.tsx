import React, {createContext, useContext, useState} from 'react';
import useTagsApi from '~/api/tags';

interface Props {
  children: React.ReactNode;
}
export interface TagItem {
  id: number;
  name: string;
  count: number;
}

export interface TagState {
  tagItem: TagItem[];
}
interface InterTagContext {
  state: TagState;
  actions: {
    getTags: () => void;
  };
}

const contextDefaultValues: InterTagContext = {
  state: {
    tagItem: [
      {
        id: 0,
        name: 'name',
        count: 0,
      },
    ],
  },
  actions: {
    getTags: () => {},
  },
};

export const TagsContext = createContext<InterTagContext>(contextDefaultValues);
export const useContextTags = () => useContext(TagsContext);
const TagProvider: React.FC<Props> = ({children}) => {
  const [stateSearch, setState] = useState(contextDefaultValues);
  const {GET_TAGS} = useTagsApi();

  const getTags = async () => {
    const data = (await await GET_TAGS()) as TagItem[];

    await setState({
      ...stateSearch,
      state: {
        ...stateSearch.state,
        tagItem: data,
      },
    });
  };

  return (
    <TagsContext.Provider value={{...stateSearch, actions: {getTags}}}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagProvider;
