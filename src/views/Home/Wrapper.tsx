import React from 'react';
type Props = {
  children?: React.ReactNode;
};
const Wrapper: React.FC<Props> = ({children}) => {
  return <div className="container bg-greyscale min-h-screen">{children}</div>;
};
export default Wrapper;
