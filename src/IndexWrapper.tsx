import React from 'react';
import ModalSpin from './components/ModalSpin';
import {useGlobalStore} from '~/store/context/global';

interface Props {
  children: React.ReactNode;
}

const IndexWrapper: React.FC<Props> = ({children}) => {
  const {state} = useGlobalStore();
  return (
    <div className="w-full min-h-screen">
      <ModalSpin toggle={state.isloading}></ModalSpin>
      {children}
    </div>
  );
};
export default IndexWrapper;
