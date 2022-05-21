import React from 'react';
import Follower from './Follower';

type Props = {
  children?: React.ReactNode;
};
const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <div className="w-full bg-greyscale min-h-screen flex max-h-screen">
      {children}
      <Follower />
    </div>
  );
};
export default Wrapper;
