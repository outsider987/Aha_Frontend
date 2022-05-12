import React from 'react';
type Props = {
  children?: React.ReactNode;
};
const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <div className="w-full bg-greyscale min-h-screen flex">{children}</div>
  );
};
export default Wrapper;
