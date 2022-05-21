import React from 'react';
import ModalSpin from './components/ModalSpin';
import {useContextGlobal} from '~/store/context/global';

interface Props {
  children: React.ReactNode;
}

const IndexWrapper: React.FC<Props> = ({children}) => {
  const {state} = useContextGlobal();
  return (
    <div className="w-full min-h-screen">
      <ModalSpin toggle={state.isloading}></ModalSpin>
      {children}
    </div>
  );
};
export default IndexWrapper;
