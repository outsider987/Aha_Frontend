import React, {createContext, useContext, useState} from 'react';
interface Props {
  children: React.ReactNode;
}

interface GlobalState {
  isloading: boolean;
  isShowNavBar: boolean;
}
interface GlobalContext {
  state: GlobalState;
  actions: {
    setLoading: (b: boolean) => void;
    setShowNavBar: (b: boolean) => void;
  };
}

const contextDefaultValues: GlobalContext = {
  state: {
    isloading: false,
    isShowNavBar: false,
  },
  actions: {
    setLoading: (t: boolean) => {},
    setShowNavBar: (t: boolean) => {},
  },
};

export const GlobalContext = createContext<GlobalContext>(contextDefaultValues);
export const useContextGlobal = () => useContext(GlobalContext);
const GlobalProvider: React.FC<Props> = ({children}) => {
  const [global, setState] = useState(contextDefaultValues);

  const setLoading = (newState: boolean) => {
    setState({
      ...global,
      state: {
        ...global.state,
        isloading: newState,
      },
    });
  };

  const setShowNavBar = (newState: boolean) => {
    setState({
      ...global,
      state: {
        ...global.state,
        isShowNavBar: newState,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{...global, actions: {setLoading, setShowNavBar}}}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
